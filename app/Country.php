<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Country extends Model
{
    protected $fillable = ['name','code','slug'];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) { 
            $model->slug = Str::slug($model->name);
            $model->code = Str::upper($model->code);
        });
        static::updating(function ($model) { 
            $model->name = Str::slug($model->name);
            $model->code = Str::upper($model->code);
        });
    }
}
