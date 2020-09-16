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
        $this->authorize('viewforchannel',current_user());
        $this->authorize('view',current_user());
        $board = $modelHelperServices::getBoards();
        $channelBoard = Channel::where('user_id',current_user_id())
                        ->with('board')
                        ->get();
        return response()->json([
            'board' => $board,
            'channel' => $channelBoard
        ]);
    }
    public function store(Request $request,ModelHelperServices $modelHelperServices){
        $this->authorize('viewforchannel',current_user());
        $this->authorize('view',current_user());
        $clientBoardData = $request->all();
        $board = $modelHelperServices::getBoards();
        $channel = Channel::select('id')->where('user_id',current_user_id())->first();
        $insertData = array();
        foreach($clientBoardData as $item){
            foreach($board as $boardData){
                if($item['id'] === $boardData->id){
                    array_push($insertData,
                    array(
                        'board_id' => $item['id'],
                        'channel_id' => $channel->id,
                        )
                    );
                }
            }
        }

        if(ChannelBoard::where('channel_id',current_user()->channel->id)->exists()){
            $channel->board()->detach();
        }

        if(!empty($insertData)){
            $channel->board()->attach($insertData);
        }

        return response()->json([
            'data' => $channel->with('board')->get()
        ]);
    }
}
