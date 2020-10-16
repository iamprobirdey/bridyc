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

    public function delete($teacherId)
    {
        DB::beginTransaction();
        try {
            $teacher = ChannelTeacher::findOrFail($teacherId);
            $channelRequest = UserChannelRequest::where('user_id', $teacher->user_id)->first();
            $channelRequest->request = 'farewell';
            $channelRequest->update();
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
                ChannelTeacher::create([
                    'user_id' => $userChannelRequest->user_id,
                    'channel_id' => $userChannelRequest->channel_id
                ]);
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
        if (current_user()->channel->id === $userChannelRequest->channel_id) {
            $userChannelRequest->request = 'rejected';
            $userChannelRequest->save();

            return response()->json([
                'message' => true
            ]);
        }
    }
}
