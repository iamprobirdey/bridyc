<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

use Spatie\Activitylog\Traits\LogsActivity;

class State extends Model
{
    use LogsActivity;

    protected $fillable = ['country_id','name','code'];

    protected static $logFillable = true;

    protected static $logOnlyDirty = true;

    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->name = Str::ucfirst($model->name);
        });
        static::updating(function ($model) {
            $model->name = Str::ucfirst($model->name);
        });
    }

    public function district(){
        return $this->hasMany(District::class,'state_id','id');
    }

    public function userInformation(){
        return $this->hasOne(UserInformation::class,'state_id','id');
    }
}
