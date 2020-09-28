<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelCollegeImages extends Model
{
    protected $fillable = ['channel_id','image_path'];

    public function channel(){
        return $this->belongsTo(Channel::class,'channel_id','id');
    }
}
