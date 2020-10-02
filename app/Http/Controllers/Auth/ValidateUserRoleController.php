<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class ValidateUserRoleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function validateRole(User $user)
    {
        dd('validate', $user);
    }
}
