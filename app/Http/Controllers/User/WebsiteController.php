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
        $this->authorize('viewforchannel',auth()->user());
        $this->authorize('checkChannelForUser',auth()->user()->channel);
        return response()->json([
            'data' => Channel::select('id','website_link')->where('user_id',auth()->id())->get()
        ]);
    }

    public function editWebsiteData(EditWebsiteValidation $request){
        $this->authorize('viewforchannel',auth()->user());
        $this->authorize('checkChannelForUser',auth()->user()->channel);
        DB::table('channels')
            ->where('user_id',auth()->id())
            ->update([
                'website_link' => $request->validated()['website']
            ]);
        return response()->json([
            'message' => true,
            'data' => DB::table('channels')
                    ->where('user_id',auth()->id())
                    ->select('website_link')
                    ->get()
        ]);
    }

    public function storeWebsiteData(StoreWebsiteValidation $request){
        $this->authorize('viewforchannel',auth()->user());
        $this->authorize('checkChannelForUser',auth()->user()->channel);
        DB::table('channels')
            ->where('user_id',auth()->id())
            ->update([
                'website_link' => $request->validated()['website']
            ]);
        return response()->json([
            'message' => true,
            'data' => DB::table('channels')
                        ->where('user_id',auth()->id())
                        ->select('website_link')
                        ->get()
        ]);
    }
}
