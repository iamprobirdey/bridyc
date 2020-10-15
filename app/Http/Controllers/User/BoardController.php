<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelBoard;
use App\Http\Controllers\Controller;
use App\Services\ModelHelperServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BoardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function getBoardData(ModelHelperServices $modelHelperServices)
    {
        $this->authorize('viewforchannel', current_user());
        $this->authorize('view', current_user());
        $board = $modelHelperServices::getBoards();
        $channelBoard = Channel::where('user_id', current_user_id())
            ->with('board')
            ->get();
        return response()->json([
            'board' => $board,
            'channel' => $channelBoard
        ]);
    }
    public function store(Request $request, ModelHelperServices $modelHelperServices)
    {
        $this->authorize('viewforchannel', current_user());
        $this->authorize('view', current_user());
        $request->validate([
            'board' => 'required|array|exists:boards,id',
        ]);
        $channel = Channel::where('user_id', current_user_id())->first();

        $channel->board()->sync((array)$request->input('board'));
        $channel = Channel::where('user_id', current_user_id())->with('board')->get();
        return response()->json([
            'data' => $channel[0]->board
        ]);
    }
}
