<?php

namespace App\Http\Controllers;

use App\Channel;
use App\User;
use Illuminate\Support\Facades\Auth;

class ChannelController extends Controller
{
    public function index(){
        $channel = Channel::select(
                    'district_id',
                    'user_id',
                    'title',
                    'icon_avatar',
                    'description',
                    'slug'
                )
                ->with('district')
                ->get();
        return view('index',compact('channel'));
    }

    public function getChannelBySlug($slug){
        $channel = Channel::where('slug',$slug)
                    ->with(['state','district','village','language','stream'])
                    ->first();
        if($channel === null) abort(404);
        $userId = Auth::id();
        $user = User::where('id',$channel->user_id)
                ->with('verification')
                ->first();
        return view('channel_with_slug',compact(['channel','user','userId']));
    }
}
