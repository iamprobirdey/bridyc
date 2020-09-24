<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Acheivement extends Model
{
    protected $fillable = ['channel_id','image_path','title','description','date'];

    protected static $logAttributes = ['channel_id','image_path','title','description' ,'user.name','user.id','channel.title'];

    protected static $logOnlyDirty = true;

    public function getImageAttribute(){
        return $this->image_path;
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function channel(){
        return $this->belongsTo(Channel::class,'channel_id','id');
    }
}
