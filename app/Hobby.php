<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Hobby extends Model
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

    public function studenthobby(){
        return $this->belongsToMany(Hobby::class,'student_hobbies','hobby_id','user_id');
    }
}
