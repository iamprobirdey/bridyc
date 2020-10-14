<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class Subject extends Model
{
    protected $fillable = ['name', 'code'];

    public function user()
    {
        return $this->belongsToMany(User::class, 'student_subjects', 'user_id', 'subject_id');
    }
}
