<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInstitute extends Model
{
    protected $fillable = ['user_id'];

    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
