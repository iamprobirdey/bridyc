<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Services\ModelHelperServices;
use App\User;
use App\Channel;
use Auth;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Channel $channel)
    {
        $this->authorize('checkChannelForUser', $channel);
        $value = Carbon::now('Asia/Kolkata');
        $date = $value->toDayDateTimeString();
        return view('institute.dashboard', compact('date'));
    }

    public function verification(ModelHelperServices $modelHelperService)
    {
        $this->authorize('viewforchannel', auth()->user());
        $allPlaces = $modelHelperService::getStateDistrictVillage();
        $usersVerification = $modelHelperService::getUserVerificationDetails();
        $authUser = auth()->user();
        $languages = $modelHelperService::getLanguages();
        return view(
            'institute.verification',
            compact('allPlaces', $allPlaces),
            compact('usersVerification', $usersVerification),
        )
            ->with('languages', $languages)
            ->with('authUser', $authUser)
            ->with('date', Carbon::now('Asia/Kolkata')->toDateString());
    }

    public function channel(Channel $channel)
    {
        $this->authorize('checkChannelForUser', $channel);
        $channel = Channel::where('user_id', auth()->id())
            ->with(['state', 'district', 'village', 'language', 'achievement', 'collegeImage', 'board'])
            ->with(['teacher' => function ($query) {
                $query->with(['user']);
            }])
            ->with(['notification' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }])
            ->first();
        $user = User::where('id', auth()->id())->with('verification')->first();
        return view('institute.channel', compact(['user', 'channel']));
    }

    public function editChannel(Channel $channel)
    {
        $this->authorize('checkChannelForUser', $channel);
        $channel = Channel::where('id', $channel->id)->with('collegeImage')->get();
        return view('institute.edit_channel', [
            'channel' => $channel,
            'user' => current_user()
        ]);
    }

    public function profile(User $user)
    {
        $this->authorize('view', $user);
        $user = User::where('id', auth()->id())->with('education')->with('activities')->get();
        return view('institute.profile')
            ->with([
                'user' => $user[0]
            ]);
    }

    public function acheivement(Channel $channel)
    {
        $this->authorize('checkChannelForUser', $channel);
        $achievement = Channel::where('id', $channel->id)->with('achievement')->get();
        return view('institute.acheivement', [
            'achievement' => $achievement,
            'userid' => current_user_id()
        ]);
    }

    public function teacher(Channel $channel)
    {
        $this->authorize('checkChannelForUser', $channel);
        return view('institute.teacher', [
            'teacher' => $channel->select('id')
                ->with('userchannelrequest.user')
                ->with('teacher.user')->get(),
        ]);
    }

    public function newFeature()
    {
        return view('institute.new-feature');
    }

    public function notification(Channel $channel)
    {
        return view('institute.notification', [
            'notification' => $channel->notification,
            'channelId' => $channel->id
        ]);
    }
}
