<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentHobby extends Model
{
    protected $fillable = ['user_id','hobby_id'];

    public function hobby(){
        return $this->belongsToMany(Hobby::class);
    }

    public function user(){
        return $this->belongsToMany(User::class);
    }
}
