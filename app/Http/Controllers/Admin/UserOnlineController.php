<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;

class UserOnlineController extends Controller
{
    public function index()
    {
        $this->authorize('superadmin', auth()->user());
        return view('admin.user-online', [
            'users' => User::select('name', 'email', 'last_activity')->whereNotIn('id', [1, 2, 3, 4])->get()
        ]);
    }
}
