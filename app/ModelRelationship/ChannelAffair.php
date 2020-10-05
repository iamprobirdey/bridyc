<?php

namespace App\ModelRelationship;

use App\Acheivement;
use App\Board;
use App\Channel;
use App\ChannelCollegeImages;
use App\ChannelNotification;
use App\ChannelTeacher;
use App\District;
use App\Language;
use App\Standard;
use App\State;
use App\User;
use App\UserChannelRequest;
use App\UserInstitute;
use App\Village;

trait ChannelAffair
{
    public function user()
    {
        return $this->belongsTo(Channel::class, 'user_id', 'id');
    }

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id', 'id');
    }

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id', 'id');
    }

    public function village()
    {
        return $this->belongsTo(Village::class, 'village_id', 'id');
    }

    public function language()
    {
        return $this->belongsTo(Language::class, 'language_id', 'id');
    }

    public function  userchannelrequest()
    {
        return $this->hasMany(UserChannelRequest::class, 'channel_id', 'id');
    }

    public function userinstitute()
    {
        return $this->hasOne(UserInstitute::class, 'channel_id', 'id');
    }
    public function achievement()
    {
        return $this->hasMany(Acheivement::class, 'channel_id', 'id');
    }

    public function teacher()
    {
        return $this->hasMany(ChannelTeacher::class, 'channel_id', 'id');
    }

    public function standard()
    {
        return $this->belongsToMany(Standard::class, 'channel_standards', 'channel_id', 'standard_id');
    }

    public function board()
    {
        return $this->belongsToMany(Board::class, 'channel_boards', 'channel_id', 'board_id');
    }

    public function collegeImage()
    {
        return $this->hasMany(ChannelCollegeImages::class, 'channel_id', 'id');
    }

    public function instituteAnalysis()
    {
        return $this->belongsToMany(User::class, 'institute_analyses', 'user_id', 'channel_id');
    }

    public function notification()
    {
        return $this->hasMany(ChannelNotification::class, 'channel_id', 'id');
    }
}
