<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

use Spatie\Activitylog\Traits\LogsActivity;

class Standard extends Model
{
    protected $fillable = ['standard_name'];

    protected static $logAttributes = ['standard_name'];

    protected static $logOnlyDirty = true;


    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->standard_name = Str::ucfirst($model->standard_name);
            $model->code = strtolower($model->standard_name);
        });
        static::updating(function ($model) {
            $model->standard_name = Str::ucfirst($model->standard_name);
            $model->code = strtolower($model->standard_name);
        });
    }

    public function channel(){
        return $this->belongsToMany(Channel::class,'channel_standards','channel_id','standard_id');
    }
}
