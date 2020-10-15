<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class Language extends Model
{
    protected $fillable = ['name', 'code'];
}
