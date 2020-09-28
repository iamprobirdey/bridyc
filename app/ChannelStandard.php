<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class ChannelStandard extends Model
{
    protected $fillable = ['channel_id','standard_id'];

    protected static $logAttributes = ['channel_id','standard_id'];

    protected static $logOnlyDirty = true;

    public function channel(){
        return $this->belongsToMany(Channel::class);
    }
    public function standard(){
        return $this->belongsToMany(Standard::class);
    }
}
