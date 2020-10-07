<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repository\SocialAccountService;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\File;

class GoogleLoginController extends Controller
{
    public function getGoogleLogIn()
    {
        Session::put('url.intended', URL::previous());
        return Socialite::driver('google')->redirect();
    }

    public function getBackGoogleValiationStore(SocialAccountService $service)
    {
        try {
            $social_user = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            //return Redirect::to('login/' . 'google');
            return Socialite::driver('google')->with(['auth_type' => 'reauthorize'])->redirect();
        }

        $authUser = $service->createOrGetUser($social_user);

        Auth::login($authUser, true);

        if ($authUser->avatar === 'default.png' || $authUser->avatar === NULL) {
            //Saving avatar from social media
            $fileContents = file_get_contents($social_user->getAvatar());
            $img_name = $social_user->getId() . ".jpg";
            File::put(public_path() . '/media/users/profile/' . $authUser->id . '/' . 's-' . $img_name, $fileContents);
            User::where('id', $authUser->id)->update(['avatar' => $img_name]);
        }
        //$url = Session::get('url.intended', url('/'));
        //Session::forget('url.intended');
        return redirect(route('validate.user.role', $authUser->email));
    }

    //105651899629154890765
    //105651899629154890765
}
