<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelAccountantAdmission extends Model
{
    protected $fillable = [
        'channel_id',
        'admission_number',
        'name',
        'class',
        'roll_number',
        'phone',
        'father_name',
        'category',
        'options'
    ];
}
