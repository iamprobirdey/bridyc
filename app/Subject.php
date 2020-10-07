<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

use Spatie\Activitylog\Traits\LogsActivity;

class Subject extends Model
{
    protected $fillable = ['name'];

    protected static $logAttributes = ['name','user.name','user.id'];

    protected static $logOnlyDirty = true;

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

    public function user(){
        return $this->belongsToMany(User::class,'student_subjects','user_id','subject_id');
    }
}
