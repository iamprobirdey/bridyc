<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Acheivement extends Model
{
    protected $fillable = ['user_id','channel_id','image_path','title','description'];

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
