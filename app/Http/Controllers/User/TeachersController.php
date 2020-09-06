<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelTeacher;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TeachersController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function store(Channel $channel, Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        // 'gender' => ['required','string',
        // Rule::in(['male', 'female']),
        // ],
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'username' => $request->input('name'),
            'user_type' => 'teacher'
        ]);

        $channelTeacher = ChannelTeacher::create([
                                'channel_id' => $channel->id,
                                'user_id' => $user->id
                            ]);
            return response()->json([
                'message' => true,
                'data' =>$channelTeacher->with('user')->get()
            ]);
    }

    public function delete($channelTeacher){
        ChannelTeacher::find($channelTeacher)->delete();

        return response()->json([
            'message' => true
        ]);
    }
}
