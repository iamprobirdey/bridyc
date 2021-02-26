<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelSupervisor extends Model
{
    protected $fillable = ['channel_id', 'form_data'];

    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id');
    }
}
