<?php

namespace App\Policies;

use App\User;
use App\UserEducation;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserEducationPolicy
{
    use HandlesAuthorization;

    public function updatingEducationByUser(User $user,UserEducation $userEducation){
        return $userEducation->user_id === $user->id;
    }
}
