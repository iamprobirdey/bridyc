<?php

namespace App\ModelRelationship;

use App\Acheivement;
use App\Channel;
use App\Hobby;
use App\Subject;
use App\UserChannelRequest;
use App\UserEducation;
use App\UserInformation;
use App\Verification;

trait UserAffair
{
    public function userinstitute()
    {
        return $this->hasOne(UserInstitute::class, 'user_id', 'id');
    }

    public function education()
    {
        return $this->hasMany(UserEducation::class, 'user_id', 'id');
    }

    public function verification()
    {
        return $this->hasOne(Verification::class, 'user_id', 'id');
    }
    public function channel()
    {
        return $this->hasOne(Channel::class, 'user_id', 'id');
    }

    public function instituteAnalysis()
    {
        return $this->belongsToMany(Channel::class, 'institute_analyses', 'user_id', 'channel_id');
    }

    public function studentSubject()
    {
        return $this->belongsToMany(Subject::class, 'student_subjects', 'user_id', 'subject_id');
    }

    public function studentHobby()
    {
        return $this->belongsToMany(Hobby::class, 'student_hobbies', 'user_id', 'hobby_id');
    }

    public function acheivement()
    {
        return $this->hasMany(Acheivement::class, 'user_id', 'id');
    }

    public function userinformation()
    {
        return $this->hasOne(UserInformation::class, 'user_id', 'id');
    }

    public function  userchannelrequest()
    {
        return $this->hasOne(UserChannelRequest::class, 'user_id', 'id');
    }
}
