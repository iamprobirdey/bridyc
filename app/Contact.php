<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['name','email','phone','message'];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) { 
            $model->phone = '+91'.$model->phone;
        });
    }
}
