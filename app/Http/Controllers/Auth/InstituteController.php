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

class InstituteController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function instituteRegister(){
        return view('institute_register');
    }

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
                'user_id' => $user->id,
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
