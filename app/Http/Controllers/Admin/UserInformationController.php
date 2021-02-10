<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use DB;

class UserInformationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $this->authorize('superadmin', auth()->user());

        return view('admin.userinfo.index');
    }

    public function getAllUserInformation($currentpage = null)
    {
        $this->authorize('superadmin', auth()->user());
        $users  = User::select('name', 'email', 'phone', 'gender', 'status')
            ->paginate(2);

        return response()->json([
            'users' => $users
        ]);
    }

    public function getSelectedInformation(Request $request)
    {
        $users = DB::table('users');
        if ($request->has('usertype') && $request->input('usertype') != 'all') {
            $users = $users->where('user_type', $request->input('usertype'));
        }
        if ($request->has('gender') && $request->input('gender') != 'all') {
            $users = $users->where('gender', $request->input('gender'));
        }
        if ($request->has('status') && $request->input('status') != 'all') {
            $users = $users->where('status', $request->input('status'));
        }

        $users = $users->paginate(2);
        return response()->json([
            'users' => $users
        ]);
    }
}
