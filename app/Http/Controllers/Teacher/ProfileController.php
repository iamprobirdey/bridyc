<?php

namespace App\Http\Controllers\Teacher;

use App\Channel;
use App\District;
use App\Hobby;
use App\Http\Controllers\Controller;
use App\Standard;
use App\State;
use App\StudentSubject;
use App\Subject;
use App\User;
use App\UserInformation;
use App\UserInstitute;
use App\Village;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(User $user)
    {
        $userId = auth()->id();
        $channels = Channel::select('id', 'title')->get();
        $states = State::select('id', 'name')->get();
        $districts = District::select('id', 'name')->get();
        $villages = Village::select('id', 'name')->get();
        $standards = Standard::select('id', 'standard_name')->get();
        $subjects = Subject::select('id', 'name')->get();
        $studentSubjects = StudentSubject::where('user_id', $userId)->with('subject')->get();
        $hobbies = Hobby::select('id', 'name')->get();
        $userInformation = UserInformation::where('user_id', $userId)
            ->with([
                'state',
                'district',
                'village',
                'standard'
            ])
            ->first();
        $userInstitute = UserInstitute::where('user_id', $userId)->with('user')->with('channel')->first();
        return view('teacher.profile', [
            'user' => $user,
            'channels' => $channels,
            'states' => $states,
            'districts' => $districts,
            'villages' => $villages,
            'standards' => $standards,
            'userInformation' => $userInformation,
            'subjects' => $subjects,
            'studentSubjects' => $studentSubjects,
            'hobbies' => $hobbies,
            'userinstitute' => $userInstitute
        ]);
    }

    public function storeUsername(User $user, Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|unique:App\User,username',
        ]);
        $user = User::findOrFail(current_user_id());
        $user->username = $validated['username'];
        $user->save();

        return response()->json([
            'message' => true
        ]);
    }

    public function storeAddress(User $user, Request $request)
    {
        $validated = $request->validate([
            'state_id' => 'required|exists:states,id',
            'district_id' => 'required|exists:districts,id',
            'village_id' => 'required|exists:villages,id',
            'standard_id' => 'required|exists:standards,id',
        ]);

        $validated['user_id'] = $user->id;

        if (UserInformation::where('user_id', $user->id)->exists()) {
            UserInformation::where('user_id', $user->id)->delete();
        }
        UserInformation::create($validated);

        $userInformation = UserInformation::where('user_id', $user->id)
            ->with([
                'state',
                'district',
                'village',
                'standard'
            ])
            ->first();
        return response()->json([
            'message' => true,
            'userData' => $userInformation
        ]);
    }

    public function storeChannel(User $user, Request $request)
    {
        if ($request->input('channel_id') == null && $request->input('school_name') == null) abort(404);
        if ($request->input('channel_id') != null && $request->input('school_name') != null) abort(404);
        $validated = $request->validate([
            'channel_id' => 'nullable|exists:channels,id',
            'school_name' => 'nullable|string'
        ]);
        if (UserInstitute::where('user_id', $user->id)->exists()) {
            UserInstitute::where('user_id', $user->id)->delete();
        }
        $userinfo = UserInstitute::create(['user_id' => $user->id]);
        if ($request->input('channel_id') == null) {
            $userinfo->school_name = $request->input('school_name');
            $userinfo->save();
        } else {
            $userinfo->channel_id = $request->input('channel_id');
            $userinfo->save();
        }
        $userInstitute = UserInstitute::where('user_id', $user->id)
            ->with([
                'channel'
            ])
            ->first();
        return response()->json([
            'message' => true,
            'data' => $userInstitute
        ]);
    }

    public function storeSubjectData(User $user, Request $request)
    {
        //$this->authorize('updatingStudentSubject',$user);

        $request->validate([
            'subject_id' => 'required|array|exists:subjects,id',
        ]);
        $user->studentSubject()->sync((array)$request->input('subject_id'));
        $hobby = User::where('id', current_user_id())->with('studentSubject')->first();
        $studentSubjects = StudentSubject::where('user_id', current_user_id())->with('subject')->get();
        return response()->json([
            'message' => true,
            'data' => $studentSubjects
        ]);
    }

    public function storeAvatar(User $user, Request $request)
    {
        $this->authorize('updatingteahcer', $user);
        $request->validate([
            'image' => 'required'
        ]);

        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.webp';
        $realImage = Image::make($request->input('image'));
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "/media/users/profile/" . current_user_id() . "/";

        if (is_dir('/media/users/profile/' . current_user_id())) {
            if ($user->avatar != null) {
                //@unlink('/media/users/profile/' . current_user_id() . '/' . $user->avatar);
                //@unlink('/media/users/profile/' . current_user_id() . '/m-' . $user->avatar);
                @unlink('/media/users/profile/' . current_user_id() . '/s-' . $user->avatar);
            }
        }

        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(170, 170);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);

                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        } else {
            $image->resize(170, 170);
            $image->save(public_path($path) . $imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
            //FacadesImageOptimizer::optimize($path.'s-',$imageName);
        }

        $user->avatar = $imageName;
        $user->update();

        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }

    public function phoneStore(User $user, Request $request)
    {
        $request->validate([
            'phone' => 'required|numeric|min:10'
        ]);
        $user->phone = $request->input('phone');
        $user->update();

        return response()->json([
            'message' => true,
            'user' => $user
        ]);
    }
}
