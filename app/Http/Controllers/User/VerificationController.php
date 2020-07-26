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
        $verification =
                    Verification::create([
                    'user_id' => auth()->id(),
                    'state_id' => $request->validated()['state_id'],
                    'district_id' => $request->validated()['district_id'],
                    'village_id' => $request->validated()['village_id'],
                    'language_id' => $request->validated()['language_id'],
                    'title' => $request->validated()['title'],
                    'udise' => $request->validated()['udise'],
                    'location' => $request->validated()['location'],
                    'ownership' => $request->validated()['ownership'],
                    'founded' => $request->validated()['founded'],
                    'pin' => $request->validated()['pin'],
                    'gender' => $request->validated()['gender'],
                    'status' => 1
                    ]);

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
