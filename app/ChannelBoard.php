<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelBoard extends Model
{
    protected $fillable = ['user_id','channel_id','board_id'];

    public function board(){
        return $this->belongsTo(Board::class,'board_id','id');
    }
}
