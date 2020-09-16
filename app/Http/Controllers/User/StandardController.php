<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Standard;
use App\ChannelStandard;
use App\Http\Requests\Standard\StoreAndUpdateUserStandardValidation;
use DB;
use Illuminate\Auth\Events\CurrentDeviceLogout;

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
        $channelStandard = Channel::select('id')->where('user_id',current_user_id())
                            ->with('standard')
                            ->get();
        return response()->json([
            'standard' => $standard,
            'channel' => $channelStandard
        ]);
    }
    public function store(Request $requets){
        $this->authorize('viewforchannel',current_user());
        $this->authorize('view',current_user());
        $data = $requets->all();
        $standard = Standard::all();
        $channel = Channel::select('id')->where('user_id',current_user_id())->first();
        $insertData = array();
        foreach($data as $item){
            foreach($standard as $stand){
                if($item['id'] === $stand->id){
                    array_push($insertData,
                    array(
                        'standard_id' => $item['id'],
                        'channel_id' => $channel->id,
                        )
                    );
                }
            }
        }
        if(ChannelStandard::where('channel_id',current_user()->channel->id)->exists()){
            //ChannelStandard::where('channel_id',current_user()->channel->id)->delete();
            $channel->standard()->detach();
        }

        if(!empty($insertData)){
            $channel->standard()->attach($insertData);
        }

        return response()->json([
            'data' => $channel->with('standard')->get()
        ]);
    }
}
