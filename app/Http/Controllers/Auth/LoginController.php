<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }



    public function showAdminLoginForm()
    {
        return view('auth.login');
        abort(404);
    }

    public function login(Request $request){
        $this->validate($request, [
            'email' => 'required|email|max:255',
            'password' => 'required|min:6',
        ]);
        $auth = false;
        $user = User::where('email', $request->input('email'))->first();
        if($user){
            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials, $request->has('remember'))) {
                $auth = true;


                //UserLoginLog
                /*$userLoginLog = new UserLoginLog();
                $userLoginLog->user_id = Auth::user()->id;
                $userLoginLog->save();*/

                //Fire Event That Seller Has LoggedIn
                //event(new UserHasLoggedIn(Auth::user()->id));

                $redirectRoute = [
                    'student' => '/',
                    'institute' => '/'
                ];


                return response()->json([
                    'status'=> 'success',
                    'message' => $auth,
                    'route' => $redirectRoute[$user->user_type]
                ]);
            }else{
                return response()->json([
                    'status'=> 'failed',
                    'message' => 'Password did not match.'
                ]);
            }
        }

        return response()->json([
            'status'=> 'failed',
            'message' => 'Email-Id does not exist.'
        ]);
    }
}
