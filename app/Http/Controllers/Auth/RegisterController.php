<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use App\Verification;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

    public function postRegister(Request $request){
            $this->validator($request->all())->validate();

            $user = $this->create($request->all());
            $credentials = $request->only('email', 'password');

            $redirectRoute = [
                'student' => '/',
                'institute' => '/user/dashboard'
            ];
            if($request->input('user_type') === 'institute'){
                Verification::create([
                    'status' => 0
                ]);
                $user->assignRole('institute');
            }
            if($request->input('user_type') === 'student'){
                $user->assignRole('student');
            }

            $auth = false;
            if (Auth::attempt($credentials)) {
                $auth = true;
            }



            return response()->json([
                'status' => 'success',
                'auth' => $auth,
                'redirectRoute' => $redirectRoute[$request->input('user_type')]
            ]);
    }


    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'user_type' => ['required','string'],
            'phone' => ['required','numeric','min:10']
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $username = $this->getUserName($data);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'username' => $username,
            'user_type' => $data['user_type'],
            'phone' => $data['phone']
        ]);
    }

    protected function getUserName(array $data){
        $username = $data['name'].random_int(1,1000000);
        $user = User::where('username',$username)->first();
        if($user === null) return $username;
        $this->getUserName($data);
    }
}
