<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserChannelRequest extends Model
{
    protected $fillable = ['user_id', 'channel_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->select('id', 'name', 'email', 'avatar');
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id');
    }
}
