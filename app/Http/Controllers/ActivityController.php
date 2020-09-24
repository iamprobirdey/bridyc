<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivityController extends Controller
{
    public function store(){
        if(Auth::check()){
            if(current_user()->last_activity == null){
                current_user()->last_activity = Carbon::now();
                current_user()->update();
            }
            if(Carbon::parse(current_user()->last_activity)->diffForHumans() > 10){
                current_user()->last_activity = Carbon::now();
                current_user()->update();
                //2020-09-21 12:29:15
            }
        }
    }
}
