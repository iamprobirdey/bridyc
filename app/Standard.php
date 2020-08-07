<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Standard extends Model
{
    protected $fillable = ['standard_name'];
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
}
