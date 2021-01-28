<?php

namespace App\Http\Controllers;

use App\Channel;
use App\InstituteAnalysis;
use App\Podcast;
use App\User;
use App\UserChannelRequest;
use App\Verification;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;

class ChannelController extends Controller
{
    public function index()
    {

        $podcast = Podcast::orderBy('created_at', 'desc')->limit(1)->first();
        //activity('all-user')->log('User entered in Bridyc');

        $channel = Channel::select(
            'district_id',
            'user_id',
            'title',
            'icon_avatar',
            'description',
            'slug'
        )
            ->where('status', 1)
            ->with('district')
            ->get();
        $podcastCount = Podcast::count();
        return view('index', compact('channel', 'podcast', 'podcastCount'));
    }

    public function getChannelBySlug(Channel $channel)
    {
        //$this->fireTheLog($channel);
        $channeldata = Channel::where('id', $channel->id)
            ->with(['state', 'district', 'village', 'language', 'achievement', 'board'])
            ->with(['collegeImage' => function ($query) {
                $query->limit(5);
            }])
            ->with(['teacher' => function ($query) {
                $query->with(['user']);
            }])
            ->with(['notification' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }])
            ->get();
        $user = User::where('id', $channel->user_id)
            ->select('id', 'email', 'vission', 'message', 'name', 'avatar')
            ->with('verification')
            ->first();
        $currentUser = null;
        $isTeacher = false;
        if (auth()->check()) {
            if (current_user()->isTeacher()) {
                $currentUser = UserChannelRequest::where('user_id', current_user_id())->where('channel_id', $channel->id)->first();
            }
            $isTeacher = current_user()->isTeacher();
        }

        $userId = current_user_id();

        $location = Verification::where('user_id', $channel->user_id)
            ->select('location')->first();


        return view('channel_with_slug', compact(['channeldata', 'user', 'currentUser', 'userId', 'isTeacher', 'location']));
    }

    private function fireTheLog($channel)
    {
        if (Auth::check()) {
            $role = current_user()->user_type;
            activity($role)
                ->performedOn($channel)
                ->causedBy(current_user())
                ->log('edited');
            activity()->log('User entered in Bridyc');
        } else {
            activity('all-user')
                ->performedOn($channel)
                ->log('edited');
            activity()->log('User entered in Bridyc');
        }
    }

    public function storeChannelSession($channelId)
    {
        $instituteAnalysis = new InstituteAnalysis();
        if (auth()->check()) {
            $instituteAnalysis->channel_id = (int)$channelId;
            $instituteAnalysis->most_viewed_count = 1;
            $instituteAnalysis->user_ip_address = \Request::ip();
            if (!collect([1, 2, 3, 4])->contains(current_user_id())) {
                $instituteAnalysis->extra_attributes->set('user_id', current_user_id());
            }
            $instituteAnalysis->save();
        } else {
            $instituteAnalysis->channel_id = (int)$channelId;
            $instituteAnalysis->most_viewed_count = 1;
            $instituteAnalysis->user_ip_address = \Request::ip();
            $instituteAnalysis->save();
        }
        return response()->json([
            'message' => true
        ]);
    }
}
