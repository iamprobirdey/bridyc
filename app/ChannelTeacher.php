<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class ChannelTeacher extends Model
{

    protected $fillable = ['user_id','channel_id'];


    protected static $logAttributes = ['channel_id','user_id'];

    protected static $logOnlyDirty = true;


    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
