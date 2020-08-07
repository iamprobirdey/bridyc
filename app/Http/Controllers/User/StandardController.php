<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Standard;
use App\ChannelStandard;
use App\Http\Requests\Standard\StoreAndUpdateUserStandardValidation;
use Auth;

class StandardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function getStandardData(){
        $standard = Standard::all();
        $channelStandard = ChannelStandard::where('user_id',Auth::Id())
                            ->with('standard')
                            ->get();
        return response()->json([
            'standard' => $standard,
            'channel' => $channelStandard
        ]);
    }
    public function store(Request $requets){
        $data = $requets->all();
        $standard = Standard::all();
        ChannelStandard::where('user_id',Auth::Id())
                            ->delete();
        $channel = Channel::where('user_id',Auth::id())->first();
        $insertData = array();
        foreach($data as $item){
            foreach($standard as $stand){
                if($item['id'] === $stand->id){
                    array_push($insertData,
                    array(
                        'standard_id' => $item['id'],
                        'channel_id' => $channel->id,
                        'user_id' => Auth::id()
                        )
                    );
                }
            }
        }

        ChannelStandard::insert($insertData);
        $insertData = ChannelStandard::where('user_id',Auth::id())
                        ->with('standard')
                        ->get();
        return response()->json([
            'data' => $insertData
        ]);
    }
}
