<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class Board extends Model
{

    protected $fillable = ['name', 'code'];


    public function channel()
    {
        return $this->belongsToMany(Channel::class, 'channel_boards', 'channel_id', 'board_id');
    }
}
