<?php

namespace App\Policies;

use App\User;
use App\UserInformation;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserInformationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\UserInformation  $userInformation
     * @return mixed
     */
    public function view(User $user, UserInformation $userInformation)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function checkingForUserInfromation(User $user)
    {
        //return $user->isStudent();
          return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\UserInformation  $userInformation
     * @return mixed
     */
    public function update(User $user, UserInformation $userInformation)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\UserInformation  $userInformation
     * @return mixed
     */
    public function delete(User $user, UserInformation $userInformation)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\UserInformation  $userInformation
     * @return mixed
     */
    public function restore(User $user, UserInformation $userInformation)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\UserInformation  $userInformation
     * @return mixed
     */
    public function forceDelete(User $user, UserInformation $userInformation)
    {
        //
    }
}
