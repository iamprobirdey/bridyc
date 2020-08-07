<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\Http\Controllers\Controller;
use App\Http\Requests\Social\SocialMediaLinkValidation;
use App\Services\ModelHelperServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SocialController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function getSocialData(ModelHelperServices $modelHelperServices){
        $channel = $modelHelperServices::getChannelExtraData();
        return response()->json([
            'channel' => $channel
        ]);
    }

    public function store(SocialMediaLinkValidation $request){
        $channel = Channel::where('user_id',Auth::id())->first();
        if($request->validated()['facebook'] != '')$channel->extra_attributes->set('social.facebook',$request->validated()['facebook']);
        if($request->validated()['instagram'] != '')$channel->extra_attributes->set('social.instagram',$request->validated()['instagram']);
        if($request->validated()['linkedIn'] != '')$channel->extra_attributes->set('social.linkedIn',$request->validated()['linkedIn']);
        if($request->validated()['youtube'] != '')$channel->extra_attributes->set('social.youtube',$request->validated()['youtube']);
        $channel->save();

        return response()->json([
            'data' => $channel
        ]);
    }

}
