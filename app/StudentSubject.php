<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentSubject extends Model
{
    protected $fillable = ['user_id','subject_id'];

    public function user(){
        return $this->belongsToMany(User::class);
    }

    public function subject(){
        return $this->belongsTo(Subject::class);
    }
}
