<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ChannelVerificationValidation;
use App\Jobs\ChannelCreatingProcessor;
use App\Verification;
use Auth;

class VerificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getVerificationData(ChannelVerificationValidation $request){
        $verification = Verification::where('user_id',Auth::id())->first();
        $verification->state_id = $request->validated()['state_id'];
        $verification->district_id = $request->validated()['district_id'];
        $verification->village_id = $request->validated()['village_id'];
        $verification->language_id = $request->validated()['language_id'];
        $verification->title = $request->validated()['title'];
        $verification->udise = $request->validated()['udise'];
        $verification->location = $request->validated()['location'];
        $verification->ownership = $request->validated()['ownership'];
        $verification->founded = $request->validated()['founded'];
        $verification->pin = $request->validated()['pin'];
        $verification->gender = $request->validated()['gender'];
        $verification->status = 1;
        $verification->update();

        ChannelCreatingProcessor::dispatchNow($verification);

        return response()->json([
            'message' => 'Successful'
        ]);
    }
}
