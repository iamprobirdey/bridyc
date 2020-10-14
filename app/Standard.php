<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class Standard extends Model
{
    protected $fillable = ['standard_name', 'code'];

    public function channel()
    {
        return $this->belongsToMany(Channel::class, 'channel_standards', 'channel_id', 'standard_id');
    }

    public function userInformation()
    {
        return $this->hasOne(UserInformation::class, 'standard_id', 'id');
    }
}
