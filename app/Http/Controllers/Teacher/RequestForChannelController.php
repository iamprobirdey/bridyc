<?php

namespace App\Http\Controllers\Teacher;

use App\Channel;
use App\Http\Controllers\Controller;
use App\User;
use App\UserChannelRequest;
use Illuminate\Http\Request;

class RequestForChannelController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function requestForChannel(User $user, $channelId)
    {
        $this->authorize('updatingteahcer', $user);

        UserChannelRequest::create([
            'user_id' => $user->id,
            'channel_id' => $channelId
        ]);
        return response()->json([
            'message' => true
        ]);
    }
}
