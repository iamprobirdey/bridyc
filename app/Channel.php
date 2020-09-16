<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\SchemalessAttributes;
use Illuminate\Database\Eloquent\Builder;

class Channel extends Model
{
    protected $fillable = [
                        'user_id',
                        'state_id',
                        'district_id',
                        'village_id',
                        'language_id',
                        'title',
    ];
    public $casts = [
      'extra_attributes' => 'array',
    ];

    public function getExtraAttributesAttribute(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'extra_attributes');
    }

    public function scopeWithExtraAttributes(): Builder
    {
        return SchemalessAttributes::scopeWithSchemalessAttributes('extra_attributes');
    }


    public function user(){
        return $this->belongsTo(Channel::class,'user_id','id');
    }

    public function state(){
        return $this->belongsTo(State::class,'state_id','id');
    }

    public function district(){
        return $this->belongsTo(District::class,'district_id','id');
    }

    public function village(){
        return $this->belongsTo(Language::class,'village_id','id');
    }

    public function language(){
        return $this->belongsTo(Language::class,'language_id','id');
    }

    public function userInformation(){
        return $this->hasOne(UserInformation::class,'channel_id','id');
    }

    public function achievement(){
        return $this->hasMany(Acheivement::class,'channel_id','id');
    }

    public function teacher(){
        return $this->hasMany(ChannelTeacher::class,'channel_id','id');
    }

    public function standard(){
        return $this->belongsToMany(Standard::class,'channel_standards','channel_id','standard_id');
    }

    public function board(){
        return $this->belongsToMany(Board::class,'channel_boards','channel_id','board_id');
    }
}
