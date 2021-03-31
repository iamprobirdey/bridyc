<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelAccountantAdmission extends Model
{
    protected $fillable = [
        'channel_id',
        'admission_number',
        'name',
        'roll_number',
        'phone',
        'father_name',
        'category',
        'options',
        'balance_taken',
        'balance_total',
        'old_balance'
    ];

    public function standard()
    {
        return $this->hasMany(AdmissionStandard::class, 'channel_accountant_admissions_id', 'id');
    }
}
