<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

use Spatie\Activitylog\Traits\LogsActivity;

class Village extends Model
{
    protected $fillable = ['district_id','name','code'];

    protected static $logAttributes = [
        'name',
        'code',
        'district.name',
    ];

    protected static $logOnlyDirty = true;

    public function district(){
        return $this->belongsTo(District::class,'district_id','id');
    }

    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->name = Str::ucfirst($model->name);
            if(!$model->district->id) {
                abort(404);
            }
        });
        static::updating(function ($model) {
            $model->name = Str::ucfirst($model->name);
            if(!$model->district->id) {
                abort(404);
            }
        });
    }

    public function userInformation(){
        return $this->hasOne(UserInformation::class,'village_id','id');
    }
}
