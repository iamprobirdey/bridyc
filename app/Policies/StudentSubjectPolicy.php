<?php

namespace App\Policies;

use App\StudentSubject;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StudentSubjectPolicy
{
    use HandlesAuthorization;


    public function updatingStudentSubject(User $user, StudentSubject $studentSubject)
    {
        if($user->isStudent())
            return true;
    }
}
