<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

use Spatie\Activitylog\Traits\LogsActivity;

class Hobby extends Model
{
    protected $fillable = ['name', 'code'];

    public function studenthobby()
    {
        return $this->belongsToMany(Hobby::class, 'student_hobbies', 'hobby_id', 'user_id');
    }
}
