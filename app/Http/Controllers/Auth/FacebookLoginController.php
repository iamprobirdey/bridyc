<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class FacebookLoginController extends Controller
{
    public function getFacebookLogIn(){
        return Socialite::driver('facebook')->redirect();
    }

    public function getBackFacebookValiationStore(){
        try {
            $user = Socialite::driver('facebook')->user();
            dd($user);
        } catch (\Exception $e) {
            return redirect('/login');
        }
    }

}
