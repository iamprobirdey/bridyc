<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Website\StoreWebsiteValidation;
use App\Http\Requests\Website\EditWebsiteValidation;
use App\Channel;
use DB;

class WebsiteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getWebsiteData()
    {

        $this->authorize('viewforchannel', current_user());
        $this->authorize('checkChannelForUser', current_user()->channel);
        return response()->json([
            'data' => Channel::select('id', 'website_link')->where('user_id', current_user_id())->first()
        ]);
    }

    public function editWebsiteData(EditWebsiteValidation $request)
    {
        activity('institute')
            ->performedOn(current_user()->channel)
            ->causedBy(current_user())
            ->withProperties(['website ' => 'website is updated'])
            ->log('Channel name :subject.title, by :causer.name and :properties.website');


        $this->authorize('viewforchannel', current_user());
        $this->authorize('checkChannelForUser', current_user()->channel);
        DB::table('channels')
            ->where('user_id', current_user_id())
            ->update([
                'website_link' => $request->validated()['website']
            ]);
        return response()->json([
            'message' => true,
            'data' => DB::table('channels')
                ->where('user_id', current_user_id())
                ->select('website_link')
                ->first()
        ]);
    }

    public function storeWebsiteData(StoreWebsiteValidation $request)
    {
        $this->authorize('viewforchannel', current_user());
        $this->authorize('checkChannelForUser', current_user()->channel);
        DB::table('channels')
            ->where('user_id', current_user_id())
            ->update([
                'website_link' => $request->validated()['website']
            ]);
        return response()->json([
            'message' => true,
            'data' => DB::table('channels')
                ->where('user_id', current_user_id())
                ->select('website_link')
                ->first()
        ]);
    }
}
