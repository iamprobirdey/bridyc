<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class UserEducation extends Model
{
    protected $fillable  = [
        'school_name',
        'degree',
        'field_of_study',
        'start_date',
        'end_date',
        'grade',
        'activities_and_sociaties',
        'description'
    ];

    protected static $logAttributes = [
        'school_name',
        'degree',
        'field_of_study',
        'start_date',
        'end_date',
        'grade',
        'activities_and_sociaties',
        'description',
        'user.name',
        'user.id'
    ];

    protected static $logOnlyDirty = true;

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
