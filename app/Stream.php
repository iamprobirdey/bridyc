<?php

namespace App;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Stream extends Model
{
    protected $fillable = ['stream'];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) { 
            $model->stream = Str::ucfirst($model->stream);
            $model->code = strtolower($model->stream);
        });
        static::updating(function ($model) { 
            $model->stream = Str::ucfirst($model->stream);
            $model->code = strtolower($model->stream);
        });
    }
}
