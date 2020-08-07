<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelStream;
use App\Http\Controllers\Controller;
use App\Services\ModelHelperServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StreamController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function getStreamData(ModelHelperServices $modelHelperServices){
        $stream = $modelHelperServices::getStreams();
        $channelStream = ChannelStream::where('user_id',Auth::id())
                ->with('stream')
                ->get();
        return response()->json([
            'stream' => $stream,
            'channel' => $channelStream
        ]);
    }

    public function store(Request $request,ModelHelperServices $modelHelperServices){
        $clientStreamData = $request->all();
        $stream = $modelHelperServices::getStreams();
        ChannelStream::where('user_id',Auth::Id())
                            ->delete();
        $channel = Channel::where('user_id',Auth::id())->first();
        $insertData = array();
        foreach($clientStreamData as $item){
            foreach($stream as $streamData){
                if($item['id'] === $streamData->id){
                    array_push($insertData,
                    array(
                        'stream_id' => $item['id'],
                        'channel_id' => $channel->id,
                        'user_id' => Auth::id()
                        )
                    );
                }
            }
        }

        ChannelStream::insert($insertData);
        $insertData = ChannelStream::where('user_id',Auth::id())
                        ->with('stream')
                        ->get();
        return response()->json([
            'data' => $insertData
        ]);
    }
}
