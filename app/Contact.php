<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class Contact extends Model
{
    protected $fillable = ['name', 'email', 'phone', 'message', 'enquired'];

    // protected static $logAttributes = ['name','email','phone','message'];

    // protected static $logOnlyDirty = true;

    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->phone = '+91' . $model->phone;
        });
    }
}
