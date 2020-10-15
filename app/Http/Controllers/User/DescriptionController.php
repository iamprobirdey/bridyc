<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Description\StoreDescriptionValidation;
use App\Http\Requests\Description\EditDescriptionValidation;
use App\Channel;
use DB;

class DescriptionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getDescriptionData()
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $userId = auth()->id();
        $channel =  Channel::select('id', 'description')->where('user_id', $userId)->first();
        return response()->json([
            'data' => $channel
        ]);
    }

    public function editDescriptionData(EditDescriptionValidation $request)
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $userId = auth()->id();
        DB::table('channels')
            ->where('user_id', $userId)
            ->update([
                'description' => $request->validated()['description']
            ]);
        $channel = DB::table('channels')
            ->where('user_id', $userId)
            ->select('description')
            ->first();
        return response()->json([
            'message' => true,
            'data' => $channel
        ]);
    }

    public function storeDescriptionData(StoreDescriptionValidation $request)
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $userId = auth()->id();
        DB::table('channels')
            ->where('user_id', $userId)
            ->update([
                'description' => $request->validated()['description']
            ]);
        $channel = DB::table('channels')
            ->where('user_id', $userId)
            ->select('description')
            ->first();
        return response()->json([
            'message' => true,
            'data' => $channel
        ]);
    }
}
