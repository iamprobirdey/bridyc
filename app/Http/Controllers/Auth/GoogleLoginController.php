<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class GoogleLoginController extends Controller
{
    public function getGoogleLogIn(){
        return Socialite::driver('google')->redirect();
    }

    public function getBackGoogleValiationStore(){
        try {
            $user = Socialite::driver('google')->user();
            dd($user);
        } catch (\Exception $e) {
            return redirect('/login');
        }
    }

    //105651899629154890765
    //105651899629154890765
}
