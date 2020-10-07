<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelNotification extends Model
{
    protected $fillable = ['channel_id', 'notify'];

    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id');
    }
}
