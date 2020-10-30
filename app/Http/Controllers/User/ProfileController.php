<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserEducationValidation;
use Illuminate\Http\Request;
use App\Http\Requests\User\StoreUserGenderValidation;
use App\User;
use App\UserActivity;
use App\UserEducation;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function storeGender(StoreUserGenderValidation $request)
    {
        $this->authorize('view', current_user());
        $this->authorize('viewforchannel', current_user());
        $user  = User::findOrFail(current_user_id());
        $user->gender  = $request->validated()['gender'];
        $user->vission = $request->validated()['vission'];
        $user->message = $request->validated()['message'];
        $user->update();

        return response()->json([
            'message' => true
        ]);
    }

    public function storeEducation(StoreUserEducationValidation $request)
    {
        $this->authorize('view', current_user());
        $this->authorize('viewforchannel', current_user());
        auth()->user()->addEducation($request->validated());
        return response()->json([
            'message' => true,
            'data' => current_user()->education
        ]);
    }
    public function storeEditEducation(UserEducation $userEducation, StoreUserEducationValidation $request)
    {
        $this->authorize('updatingEducationByUser', $userEducation);
        $this->authorize('viewforchannel', current_user());
        $userEducation->update($request->validated());
        return response()->json([
            'message' => true,
            'user' => $userEducation
        ]);
    }

    public function storeAvatar(Request $request)
    {
        $this->authorize('view', current_user());
        $this->authorize('viewforchannel', current_user());
        $request->validate([
            'image' => 'required|base64image'
        ]);
        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpg';



        $realImage = Image::make($request->input('image'));
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . current_user_id() . "/profile/";
        if (is_dir($path)) {
            $avatar = auth()->user()->avatar;
            if ($avatar != null) {
                @unlink($path . $avatar);
                @unlink($path . 'm-' . $avatar);
                @unlink($path . 's-' . $avatar);
            }
        }
        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(600, 270);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                $imageM->resize(510, 270);
                $imageM->save(public_path($path) . 'm-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                $imageS->resize(390, 270);
                $imageS->save(public_path($path) . 's-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        } else {
            $image->resize(600, 270);
            $image->save(public_path($path) . $imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
            $imageM->resize(510, 270);
            $imageM->save(public_path($path) . 'm-' . $imageName);
            //FacadesImageOptimizer::optimize($path.'m-',$imageName);
            $imageS->resize(390, 270);
            $imageS->save(public_path($path) . 's-' . $imageName);
            //FacadesImageOptimizer::optimize($path.'s-',$imageName);
        }
        $user = User::find(current_user_id());
        $user->avatar = $imageName;
        $user->update();
        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }

    public function phoneNumberstore(User $user, Request $request)
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

    public function storeActivity(Request $request)
    {
        $this->authorize('viewforchannel', current_user());
        $request->validate([
            'activity' => 'required|string',
            'description' => 'required|string'
        ]);
        current_user()->activities()->create($request->all());

        return response()->json([
            'message' => true,
            'data' => current_user()->activities
        ]);
    }

    public function editActivity(UserActivity $userActivity, Request $request)
    {
        $this->authorize('viewforchannel', current_user());
        $request->validate([
            'activity' => 'required|string',
            'description' => 'required|string'
        ]);
        $userActivity->update($request->all());
        return response()->json([
            'message' => true,
            'data' => current_user()->activities
        ]);
    }
}
