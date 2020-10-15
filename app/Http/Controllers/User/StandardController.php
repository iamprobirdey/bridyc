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

    public function getStandardData()
    {
        $this->authorize('viewforchannel', current_user());
        $this->authorize('view', current_user());
        $standard = Standard::all();
        $channelStandard = Channel::select('id')->where('user_id', current_user_id())
            ->with('standard')
            ->get();
        return response()->json([
            'standard' => $standard,
            'channel' => $channelStandard
        ]);
    }
    public function store(Request $request)
    {
        $this->authorize('viewforchannel', current_user());
        $this->authorize('view', current_user());
        $request->validate([
            'standard' => 'required|array|exists:standards,id',
        ]);
        $channel = Channel::where('user_id', current_user_id())->first();

        $channel->standard()->sync((array)$request->input('standard'));
        $channel = Channel::where('user_id', current_user_id())->with('standard')->get();
        return response()->json([
            'data' => $channel[0]->standard
        ]);
    }
}
