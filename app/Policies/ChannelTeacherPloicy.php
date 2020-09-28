<?php

namespace App\Policies;

use App\ChannelTeacher;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ChannelTeacherPloicy
{
    use HandlesAuthorization;

    public function checkAvailabilityOfTeacher(User $user,ChannelTeacher $teacher){
        return $teacher->channel_id === $user->channel->id;
    }
}
