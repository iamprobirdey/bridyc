<?php

namespace App\Http\Controllers\Student;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Channel;
use App\District;
use App\Standard;
use App\State;
use App\StudentSubject;
use App\Subject;
use App\User;
use App\UserInformation;
use App\Village;
use App\Hobby;
use App\StudentHobby;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(User $user){
        $channels = Channel::select('id','title')->get();
        $states = State::select('id','name')->get();
        $districts = District::select('id','name')->get();
        $villages = Village::select('id','name')->get();
        $standards = Standard::select('id','standard_name')->get();
        $subjects = Subject::select('id','name')->get();
        $studentSubjects = StudentSubject::where('user_id',auth()->id())->with('subject')->get();
        $hobbies = Hobby::select('id','name')->get();
        $user->with('studentHobby')->get();
        $userInformation = UserInformation::where('user_id',auth()->id())
                            ->with([
                                'channel',
                                'state',
                                'district',
                                'village',
                                'standard'
                            ])
                            ->first();
        return view('profile',[
            'user' => $user,
            'channels' => $channels,
            'states' => $states,
            'districts' => $districts,
            'villages' => $villages,
            'standards' => $standards,
            'userInformation' => $userInformation,
            'subjects' => $subjects,
            'studentSubjects' => $studentSubjects,
            'hobbies' => $hobbies
        ]);
    }

    public function storeUsername(Request $request){
        $validated = $request->validate([
            'username' => 'required|unique:users',
        ]);
        $user = User::findOrFail(auth()->id());
        $user->username = $validated['username'];
        $user->save();

        return response()->json([
            'message' => true
        ]);
    }

    public function storeAddress(Request $request){
        $validated = $request->validate([
            'channel_id' => 'required|exists:channels,id',
            'state_id' => 'required|exists:states,id',
            'district_id' => 'required|exists:districts,id',
            'village_id' => 'required|exists:villages,id',
            'standard_id' => 'required|exists:standards,id',
        ]);

        $userInformation = new UserInformation();
        $userInformation->channel_id = $validated['channel_id'];
        $userInformation->state_id = $validated['state_id'];
        $userInformation->district_id = $validated['district_id'];
        $userInformation->village_id = $validated['village_id'];
        $userInformation->standard_id = $validated['standard_id'];
        auth()->user()->userInformation()->save($userInformation);
        $userInformation = UserInformation::where('user_id',auth()->id())
                            ->with([
                                'channel',
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

    public function storeSubjectData(Request $request){
        $data = $request->all();
        $subjects = Subject::all();
        StudentSubject::where('user_id',auth()->id())
                            ->delete();
        $insertData = array();
        foreach($data as $item){
            foreach($subjects as $sub){
                if($item['id'] === $sub->id){
                    array_push($insertData,
                    array(
                        'subject_id' => $item['id'],
                        'user_id' => auth()->id()
                        )
                    );
                }
            }
        }

        StudentSubject::insert($insertData);
        $insertData = StudentSubject::where('user_id',auth()->id())
                        ->with('subject')
                        ->get();
        return response()->json([
            'message' => true,
            'data' => $insertData
        ]);
    }

    public function storeHobbyData(User $user , Request $request){
        $data = $request->validate([
            'hobby_id' => 'required|array|exists:hobbies,id',
        ]);

        StudentHobby::where('user_id',auth()->id())
                            ->delete();
        $insertData = array();
        foreach($data['hobby_id'] as $key => $item){

            array_push($insertData,
            array(
                'hobby_id' => $item,
                'user_id' => auth()->id()
                )
            );
        }

        StudentHobby::insert($insertData);
        return response()->json([
            'message' => true,
            'data' => $user->studentHobby()->get()
        ]);
    }
}
