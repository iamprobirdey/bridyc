<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelStandard extends Model
{
    protected $fillable = ['user_id','channel_id','standard_id'];

    public function standard(){
        return $this->belongsToMany(Standard::class,'id','standard');
    }
}
