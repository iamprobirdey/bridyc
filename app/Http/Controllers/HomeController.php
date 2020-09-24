<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
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

    public function about(){
        return view('about');
    }

    public function test(){


        // $user =  Auth::user();
        // $user->assignRole('institute');
    }

    //vscode://vscode.github-authentication/did-authenticate?windowId=1&code=95af817848c76e142f9a&state=166e7884-c1b5-484a-9074-6cbc586614e8
}
