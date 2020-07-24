<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Services\ModelHelperServices;
use App\User;
use App\Channel;
use Auth;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $value = Carbon::now('Asia/Kolkata');
        $date = $value->toDayDateTimeString();
        return view('institute.dashboard',compact('date'));
    }

    public function verification(ModelHelperServices $modelHelperService){
        $allPlaces = $modelHelperService::getStateDistrictVillage();
        $usersVerification = $modelHelperService::getUserVerificationDetails();
        $languages = $modelHelperService::getLanguages();
        return view('institute.verification',
            compact('allPlaces',$allPlaces),
            compact('usersVerification',$usersVerification),
            )->with('languages',$languages);
    }
    public function channel(){
        $channel = Channel::where('user_id',Auth::id())
                    ->with([
                        'state',
                        'district',
                        'village',
                        'language',
                        'stream'
                    ])
                    ->first();
        $user = User::where('id',Auth::id())->with('verification')->first();
        return view('institute.channel',compact(['user','channel']));
    }
    public function editChannel(){
        return view('institute.edit_channel');
    }
}
