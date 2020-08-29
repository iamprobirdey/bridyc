<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserEducation extends Model
{
    protected $fillable  = [
        'school_name',
        'degree',
        'field_of_study',
        'start_date',
        'end_date',
        'grade',
        'activities_and_sociaties',
        'description'
    ];
}
