<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\District;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\ChannelVerificationValidation;
use App\Jobs\ChannelCreatingProcessor;
use App\State;
use App\Verification;
use Auth;
use Illuminate\Support\Str;

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

        //ChannelCreatingProcessor::dispatchNow($verification);
        $state = State::findOrFail($verification->state_id);
        $district = District::findOrFail($verification->district_id);
        $village = District::findOrFail($verification->village_id);
        $channel = Channel::create([
            'user_id' => Auth::id(),
            'state_id' => $verification->state_id,
            'district_id' => $verification->district_id,
            'village_id' => $verification->village_id,
            'language_id' => $verification->language_id,
            'title' => $verification->title,
            'slug' => Str::slug($verification->title.'-'.$state->name.'-'.$district->name.'-'.$village->name),
            ]);
            $channel->extra_attributes->set('social.facebook', null);
            $channel->extra_attributes->set('social.youtube', null);
            $channel->extra_attributes->set('social.linkedin', null);
            $channel->extra_attributes->set('social.instagram', null);
            $channel->save();

        return response()->json([
            'message' => 'Successful'
        ]);
    }
}
