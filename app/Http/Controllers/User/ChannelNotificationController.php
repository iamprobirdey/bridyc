<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelNotification;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChannelNotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Channel $channel, Request $request)
    {
        $request->validate([
            'notify' => 'required|string'
        ]);

        $channel->notification()->create(['notify' => $request->input('notify')]);

        return response()->json([
            'message' => true,
            'data' => $channel->notification
        ]);
    }

    public function delete($notificationId)
    {
        $notification = ChannelNotification::findOrFail($notificationId);
        $notification->delete();
        return response()->json([
            'message' => true
        ]);
    }
}
