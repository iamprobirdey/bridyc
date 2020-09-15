<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Standard;
use App\ChannelStandard;
use App\Http\Requests\Standard\StoreAndUpdateUserStandardValidation;
use DB;

class StandardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function getStandardData(){
        $this->authorize('viewforchannel',current_user());
        $this->authorize('view',current_user());
        $standard = Standard::all();
        $channelStandard = ChannelStandard::where('user_id',current_user_id())
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
        ChannelStandard::where('user_id',current_user_id())
                            ->delete();
        $channel = Channel::where('user_id',current_user_id())->first();
        $insertData = array();
        foreach($data as $item){
            foreach($standard as $stand){
                if($item['id'] === $stand->id){
                    array_push($insertData,
                    array(
                        'standard_id' => $item['id'],
                        'channel_id' => $channel->id,
                        'user_id' => current_user_id()
                        )
                    );
                }
            }
        }
        if(ChannelStandard::where('user_id',current_user_id())->exists()){
            ChannelStandard::where('user_id',current_user_id())->delete();
        }

        if(!empty($insertData)){
            ChannelStandard::create($insertData);
        }
        return response()->json([
            'data' => ChannelStandard::where('user_id',current_user_id())
                        ->with('standard')
                        ->get()
        ]);
    }
}
