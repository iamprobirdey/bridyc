<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Board extends Model
{
    protected $fillable = ['name'];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->name = Str::ucfirst($model->name);
            $model->code = strtolower($model->name);
        });
        static::updating(function ($model) {
            $model->name = Str::ucfirst($model->name);
            $model->code = strtolower($model->name);
        });
    }


    public function channel(){
        return $this->belongsToMany(Channel::class,'channel_boards','channel_id','board_id');
    }
}
