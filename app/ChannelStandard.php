<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelStandard extends Model
{
    protected $fillable = ['channel_id','standard_id'];

    public function channel(){
        return $this->belongsToMany(Channel::class);
    }
    public function standard(){
        return $this->belongsToMany(Standard::class);
    }
}
