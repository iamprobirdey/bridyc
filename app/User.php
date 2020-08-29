<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable,HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email','password','username','user_type','phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function addEducation($data){
        return $this->education()->create($data);
    }

    public function education(){
        return $this->hasMany(UserEducation::class,'user_id','id');
    }

    public function verification(){
        return $this->hasOne(Verification::class,'user_id','id');
    }
    public function channel(){
        return $this->hasOne(Channel::class,'user_id','id');
    }

    public function is_verified(){

        // $verified = Verification::where('user_id',Auth::id())->first();
        // if(
        //     $verified->status === 0 ||
        //     $verified->status === 1 ||
        //     $verified->status === 3)
        //     {
        //         return true;
        //     }
        $user = auth()->user();
        if(
            $user->user_type === 'institute' &&
            ($user->status === 0 || $user->status === 2)){
                return true;
        }
        return false;
    }
}
