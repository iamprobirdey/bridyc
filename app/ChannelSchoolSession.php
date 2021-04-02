<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelSchoolSession extends Model
{
    protected $fillable = ['channel_id', 'start_session_id', 'end_session_id'];

    public function start()
    {
        return $this->belongsTo(AccountantMonth::class, 'start_session_id', 'id');
    }

    public function end()
    {
        return $this->belongsTo(AccountantMonth::class, 'end_session_id', 'id');
    }
}
