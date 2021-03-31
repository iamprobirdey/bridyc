<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelSchoolSession extends Model
{
    protected $fillable = ['channel_id', 'start_session_id', 'end_session_id'];
}
