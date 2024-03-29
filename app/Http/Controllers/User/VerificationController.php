<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\ChannelVerificationValidation;
use App\Jobs\ChannelCreatingProcessor;
use App\Verification;
use Auth;
use Exception;
use DB;
//use Illuminate\Support\Str;

class VerificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getVerificationData(ChannelVerificationValidation $request)
    {
        $this->authorize('viewforchannel', current_user());
        $this->authorize('checkVerificationDoesntExist', current_user());
        DB::beginTransaction();
        try {
            $verification =
                Verification::create([
                    'user_id' => auth()->id(),
                    'state_id' => $request->validated()['state_id'],
                    'district_id' => $request->validated()['district_id'],
                    //'village_id' => $request->validated()['village_id'],
                    'village_id' => 1,
                    'language_id' => $request->validated()['language_id'],
                    'title' => $request->validated()['title'],
                    'udise' => $request->validated()['udise'] != null ? $request->validated()['udise'] : 'not-provided',
                    'location' => $request->validated()['location'],
                    'ownership' => $request->validated()['ownership'],
                    'founded' => $request->validated()['founded'],
                    'pin' => $request->validated()['pin'],
                    'gender' => $request->validated()['gender'],
                    'status' => 1
                ]);

            //ChannelCreatingProcessor::dispatchNow($verification);
            $channel = Channel::create([
                'user_id' => Auth::id(),
                'state_id' => $verification->state_id,
                'district_id' => $verification->district_id,
                'village_id' => $verification->village_id,
                'language_id' => $verification->language_id,
                'title' => $verification->title
            ]);
            $channel->extra_attributes->set('social.facebook', null);
            $channel->extra_attributes->set('social.youtube', null);
            $channel->extra_attributes->set('social.linkedin', null);
            $channel->extra_attributes->set('social.instagram', null);
            $channel->save();
            DB::commit();
            return response()->json([
                'message' => 'Successful'
            ]);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'failed'
            ]);
        }
    }
}
