<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class Verification extends Model
{
    protected $fillable = [
        'user_id',
        'state_id',
        'district_id',
        'village_id',
        'language_id',
        'udise',
        'location',
        'title',
        'ownership',
        'founded',
        'pin',
        'gender'
    ];

    protected static $logAttributes = [
        'user.name',
        'state.name',
        'district.name',
        'village.name',
        'language.name',
        'udise',
        'location',
        'title',
        'ownership',
        'founded',
        'pin',
        'gender'
    ];

    protected static $logOnlyDirty = true;


    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function state(){
        return $this->belongsTo(State::class,'state_id','id');
    }

    public function district(){
        return $this->belongsTo(District::class,'district_id','id');
    }

    public function village(){
        return $this->belongsTo(Village::class,'village_id','id');
    }

    public function language(){
        return $this->belongsTo(Language::class,'language_id','id');
    }
}
