<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;

class UserInformation extends Model
{
    protected $fillable =
    [
        'user_id',
        'state_id',
        'district_id',
        'village_id',
        'standard_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class)->select(['name', 'id']);
    }

    public function district()
    {
        return $this->belongsTo(District::class)->select(['name', 'id']);
    }

    public function village()
    {
        return $this->belongsTo(Village::class)->select(['name', 'id']);
    }

    public function standard()
    {
        return $this->belongsTo(Standard::class)->select('standard_name', 'id');
    }
}
