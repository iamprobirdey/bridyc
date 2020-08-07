<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Description\StoreDescriptionValidation;
use App\Http\Requests\Description\EditDescriptionValidation;
use App\Channel;
use Auth;
use DB;

class DescriptionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getDescriptionData(){
        $userId = Auth::id();
        $channel =  Channel::select('id','description')->where('user_id',$userId)->get();
        return response()->json([
            'data' => $channel
        ]);
    }

    public function editDescriptionData(EditDescriptionValidation $request){
        $userId = Auth::id();
        DB::table('channels')
            ->where('user_id',$userId)
            ->update([
                'description' => $request->validated()['description']
            ]);
        $channel = DB::table('channels')
        ->where('user_id',$userId)
        ->select('description')
        ->get();
        return response()->json([
            'message' => true,
            'data' => $channel
        ]);
    }

    public function storeDescriptionData(StoreDescriptionValidation $request){
        $userId = Auth::id();
        DB::table('channels')
            ->where('user_id',$userId)
            ->update([
                'description' => $request->validated()['description']
            ]);
        $channel = DB::table('channels')
        ->where('user_id',$userId)
        ->select('description')
        ->get();
        return response()->json([
            'message' => true,
            'data' => $channel
        ]);
    }
}
