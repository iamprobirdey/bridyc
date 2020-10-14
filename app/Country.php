<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

use Spatie\Activitylog\Traits\LogsActivity;

class Country extends Model
{
    use LogsActivity;

    protected $fillable = ['name', 'code'];

    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->code = Str::upper($model->code);
        });
        static::updating(function ($model) {
            $model->code = Str::upper($model->code);
        });
    }
}
