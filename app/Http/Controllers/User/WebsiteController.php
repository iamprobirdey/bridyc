<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Website\StoreWebsiteValidation;
use App\Http\Requests\Website\EditWebsiteValidation;
use App\Channel;
use Auth;
use DB;

class WebsiteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getWebsiteData(){
        $userId = Auth::id();
        $channel =  Channel::select('id','website_link')->where('user_id',$userId)->get();
        return response()->json([
            'data' => $channel
        ]);
    }

    public function editWebsiteData(EditWebsiteValidation $request){
        $userId = Auth::id();
        DB::table('channels')
            ->where('user_id',$userId)
            ->update([
                'website_link' => $request->validated()['website']
            ]);
        $channel = DB::table('channels')
        ->where('user_id',$userId)
        ->select('website_link')
        ->get();
        return response()->json([
            'message' => true,
            'data' => $channel
        ]);
    }

    public function storeWebsiteData(StoreWebsiteValidation $request){
        $userId = Auth::id();
        DB::table('channels')
            ->where('user_id',$userId)
            ->update([
                'website_link' => $request->validated()['website']
            ]);
        $channel = DB::table('channels')
        ->where('user_id',$userId)
        ->select('website_link')
        ->get();
        return response()->json([
            'message' => true,
            'data' => $channel
        ]);
    }
}
