<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

use Spatie\Activitylog\Traits\LogsActivity;

use App\ModelRelationship\UserAffair;

class User extends Authenticatable
{
    use Notifiable,HasRoles,UserAffair;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email','password','username','user_type','phone',
    ];

    protected static $logAttributes = [
        'name', 'email','password','username','user_type','phone',
    ];

    protected static $logOnlyDirty = true;

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

    public function scopeUsername($query){
        return $query->select('id','username');
    }

    public function isUser(){
        return $this->user_type;
    }

    public function isInstitute(){
        return $this->user_type === 'institute';
    }
    public function isAdmin(){
        return $this->user_type === 'admin';
    }
    public function isStudent(){
        return $this->user_type === 'student';
    }
    public function isTeacher(){
        return $this->user_type === 'teacher';
    }

    public function is_verified(){
        if(
            $this->user_type === 'institute' &&
            ($this->status === 0 || $this->status === 2)){
                return true;
        }
        return false;
    }

    public function saveStudentHobbyData($data){
        return $this->studentHobby()->saveMany($data);
    }

    public function addEducation($data){
        return $this->education()->create($data);
    }
}
