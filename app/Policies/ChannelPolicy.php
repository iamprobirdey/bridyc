<?php

namespace App\Policies;

use App\Channel;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ChannelPolicy
{
    use HandlesAuthorization;

    public function checkChannelForUser(User $user, Channel $channel){
       return $user->id === $channel->user_id;
    }
}
