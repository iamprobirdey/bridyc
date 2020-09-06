<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserEducationValidation;
use Illuminate\Http\Request;
use App\Http\Requests\User\StoreUserGenderValidation;
use App\User;
use App\UserEducation;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function storeGender(StoreUserGenderValidation $request){
        $user  = User::findOrFail(auth()->id());
        $user->gender  = $request->validated()['gender'];
        $user->vission = $request->validated()['vission'];
        $user->update();

        return response()->json([
            'message' => true
        ]);
    }

    public function storeEducation(StoreUserEducationValidation $request){
        auth()->user()->addEducation($request->validated());
        return response()->json([
            'message' => true
        ]);
    }
    public function storeEditEducation($id , StoreUserEducationValidation $request){
        $user  = UserEducation::findOrFail($id);
        $user->update($request->validated());
        return response()->json([
                    'message' => true,
                    'user' => $user
                ]);
    }


}
