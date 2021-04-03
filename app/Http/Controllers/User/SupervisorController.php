<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelSupervisor;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SupervisorController extends Controller
{
    public function supervisor(Channel $channel)
    {
        $channelid = $channel->id;
        return view('institute.supervisor', compact('channelid'));
    }

    public function submit($channelid, Request $request)
    {
        $form_data = json_encode($request->all());
        $data = ChannelSupervisor::create([
            'channel_id' => $channelid,
            'form_data' => $form_data
        ]);

        return response()->json([
            'message' => true
        ]);
    }
}
