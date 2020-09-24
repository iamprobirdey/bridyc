<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class StudentSubject extends Model
{
    protected $fillable = ['user_id','subject_id'];

    protected static $logAttributes = ['user_id','subject_id','user.name','subject.name'];

    protected static $logOnlyDirty = true;

    public function user(){
        return $this->belongsToMany(User::class);
    }

    public function subject(){
        return $this->belongsTo(Subject::class);
    }
}
