<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class State extends Model
{
    protected $fillable = ['country_id','name','code','slug'];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->name = Str::ucfirst($model->name);
            $model->slug = Str::slug($model->name);
        });
        static::updating(function ($model) {
            $model->name = Str::ucfirst($model->name);
            $model->slug = Str::slug($model->name);
        });
    }

    public function district(){
        return $this->hasMany(District::class,'district_id','id');
    }
}
