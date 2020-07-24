<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelStream extends Model
{
    protected $fillable = ['user_id','channel_id','stream_id'];

    public function stream(){
        return $this->belongsTo(Stream::class,'stream_id','id');
    }
}
