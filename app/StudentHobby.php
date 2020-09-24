<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class StudentHobby extends Model
{
    protected $fillable = ['user_id','hobby_id'];

    protected static $logAttributes = ['user_id','hobby_id','user.name','user.id','hobby.name'];

    protected static $logOnlyDirty = true;

    public function hobby(){
        return $this->belongsToMany(Hobby::class);
    }

    public function user(){
        return $this->belongsToMany(User::class);
    }
}
