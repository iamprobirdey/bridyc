<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelTeacher;
use App\Http\Controllers\Controller;
use App\User;
use App\UserChannelRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TeachersController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function delete(ChannelTeacher $teacher)
    {
        dd($teacher->channel_id);
        $this->authorize('checkAvailabilityOfTeacher', $teacher);
        $teacher->delete();
        return response()->json([
            'message' => true
        ]);
    }

    public function acceptRequest(UserChannelRequest $userChannelRequest)
    {
        if (current_user()->channel->id === $userChannelRequest->channel_id) {
            $userChannelRequest->request = 'accepted';
            $userChannelRequest->save();
            $teacher = ChannelTeacher::create([
                'user_id' => $userChannelRequest->user_id,
                'channel_id' => $userChannelRequest->channel_id
            ]);

            return response()->json([
                'message' => true
            ]);
        }
    }

    public function deleteRequest(UserChannelRequest $userChannelRequest)
    {
        if (current_user()->channel->id === $userChannelRequest->channel_id) {
            $userChannelRequest->request = 'rejected';
            $userChannelRequest->save();

            return response()->json([
                'message' => true
            ]);
        }
    }
}
