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

    public function getBoardData(ModelHelperServices $modelHelperServices){
        $board = $modelHelperServices::getBoards();
        $channelBoard = ChannelBoard::where('user_id',Auth::id())
                ->with('board')
                ->get();
        return response()->json([
            'board' => $board,
            'channel' => $channelBoard
        ]);
    }
    public function store(Request $request,ModelHelperServices $modelHelperServices){
        $clientBoardData = $request->all();
        $board = $modelHelperServices::getBoards();
        ChannelBoard::where('user_id',Auth::Id())
                            ->delete();
        $channel = Channel::where('user_id',Auth::id())->first();
        $insertData = array();
        foreach($clientBoardData as $item){
            foreach($board as $boardData){
                if($item['id'] === $boardData->id){
                    array_push($insertData,
                    array(
                        'board_id' => $item['id'],
                        'channel_id' => $channel->id,
                        'user_id' => Auth::id()
                        )
                    );
                }
            }
        }

        ChannelBoard::insert($insertData);
        $insertData = ChannelBoard::where('user_id',Auth::id())
                        ->with('board')
                        ->get();
        return response()->json([
            'data' => $insertData
        ]);
    }
}
