<?php

namespace App\Policies;

use App\Acheivement;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AcheivementPolicy
{
    use HandlesAuthorization;

    public function updatingAchivementByUser(User $user,Acheivement $acheivement){
        return $acheivement->channel_id === $user->channel->id;
    }
}
