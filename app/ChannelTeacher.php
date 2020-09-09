<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelTeacher extends Model
{
    protected $fillable = ['user_id','channel_id'];

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
