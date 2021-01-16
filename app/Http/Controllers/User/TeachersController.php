<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelTeacher;
use App\Http\Controllers\Controller;
use App\User;
use App\UserChannelRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use DB;

class TeachersController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function delete($teacherId)
    {
        DB::beginTransaction();
        try {
            $teacher = ChannelTeacher::findOrFail($teacherId);
            $channelRequest = UserChannelRequest::where('user_id', $teacher->user_id)->where('channel_id', $teacher->channel_id)->first();
            $channelRequest->delete();
            $teacher->delete();
            DB::commit();
            return response()->json([
                'message' => true
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => true
            ]);
        }
    }

    public function acceptRequest(UserChannelRequest $userChannelRequest)
    {
        DB::beginTransaction();
        try {
            if (current_user()->channel->id === $userChannelRequest->channel_id) {
                $userChannelRequest->request = 'accepted';
                $userChannelRequest->save();
                if (!ChannelTeacher::where('user_id', $userChannelRequest->user_id)->where('channel_id', $userChannelRequest->channel_id)->exists()) {
                    ChannelTeacher::create([
                        'user_id' => $userChannelRequest->user_id,
                        'channel_id' => $userChannelRequest->channel_id
                    ]);
                }
                DB::commit();
                return response()->json([
                    'message' => true
                ]);
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => true
            ]);
        }
    }

    public function deleteRequest(UserChannelRequest $userChannelRequest)
    {
        $userChannelRequest->delete();

        return response()->json([
            'message' => true
        ]);
    }
}
