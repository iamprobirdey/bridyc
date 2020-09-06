<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\State;

class District extends Model
{
    protected $fillable = ['state_id','name','code','slug'];

    public function state(){
        return $this->belongsTo(State::class,'state_id','id');
    }
    public function village(){
        return $this->hasMany(Village::class,'district_id','id');
    }
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->name = Str::ucfirst($model->name);
            $model->slug = Str::slug($model->name);
            if(!$model->state->id) {
                abort(404);
            }
        });
        static::updating(function ($model) {
            $model->name = Str::ucfirst($model->name);
            $model->slug = Str::slug($model->name);
            if(!$model->state->id) {
                abort(404);
            }
        });
    }

    public function userInformation(){
        return $this->hasOne(UserInformation::class,'district_id','id');
    }

}
