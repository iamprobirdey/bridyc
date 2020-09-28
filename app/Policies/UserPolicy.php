<?php

namespace App\Policies;

use App\User;
use App\Verification;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function view(User $currentuser, User $user)
    {
        return $currentuser->is($user);
    }

    public function superadmin(User $user)
    {
        return collect([1, 2, 3, 4])->contains($user->id);
    }

    public function updatingteahcer(User $currentuser, User $user)
    {
        if ($currentuser->is($user) && $currentuser->isTeacher())
            return true;
    }

    public function updatingstudent(User $currentuser, User $user)
    {
        if ($currentuser->is($user) && $currentuser->isStudent())
            return true;
    }

    public function viewforchannel(User $currentuser)
    {
        if ($currentuser->isInstitute())
            return true;
    }

    public function checkVerificationDoesntExist(User $user)
    {
        $verification = Verification::where('user_id', $user->id)->exists();
        if (!$verification) return true;
    }
}
