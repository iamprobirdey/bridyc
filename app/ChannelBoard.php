<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class ChannelBoard extends Model
{
    protected $fillable = ['channel_id', 'board_id'];
}
