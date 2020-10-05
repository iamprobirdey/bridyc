<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserActivity extends Model
{
    protected $fillable = ['activity', 'description'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
