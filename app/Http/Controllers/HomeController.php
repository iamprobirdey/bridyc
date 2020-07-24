<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Admin;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function home()
    {
        return view('home');
    }

    public function application(){
        return view('application');
    }

    public function faq(){
        return view('faq');
    }

    public function contact(){
        return view('contact');
    }

    public function privacy(){
        return view('privacy');
    }

    public function terms(){
        return view('terms');
    }

    public function test(){
        $role1 = Role::create(['name' => 'student']);
        $role2 = Role::create(['name' => 'institute']);
        $role3 = Role::create(['name' => 'admin','guard_name'=> 'admin']);
        $permission1 = Permission::create(['name' => 'apply form']);
        $permission2 = Permission::create(['name' => 'institute dashboard']);
        $permission3 = Permission::create(['name' => 'admin dashboard','guard_name'=> 'admin']);
        $permission4 = Permission::create(['name' => 'delete form','guard_name'=> 'admin']);

        $role1->givePermissionTo($permission1);
        $role2->givePermissionTo($permission2);
        $role3->givePermissionTo($permission3);
        $role3->givePermissionTo($permission4);

        Admin::create([
            'name' => Str::random(10),
            'email' => 'deyprobir71@gmail.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
        ]);

        // $user =  Auth::user();
        // $user->assignRole('institute');
    }

    //vscode://vscode.github-authentication/did-authenticate?windowId=1&code=95af817848c76e142f9a&state=166e7884-c1b5-484a-9074-6cbc586614e8
}
