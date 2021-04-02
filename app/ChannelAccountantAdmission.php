<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelAccountantAdmission extends Model
{
    protected $fillable = [
        'channel_id',
        'admission_ledger_id',
        'admission_number',
        'name',
        'roll_number',
        'phone',
        'father_name',
        'category',
        'options',
        'balance_taken',
        'total_balance',
        'old_balance',
        'payment_mode'
    ];

    public function standard()
    {
        return $this->hasMany(AdmissionStandard::class, 'channel_accountant_admissions_id', 'id');
    }


    public function monthlybill()
    {
        return $this->hasMany(AdmissionMonthlyBill::class, 'acountant_admissions_id', 'id');
    }

    public function children()
    {
        return $this->hasMany(ChannelAccountantAdmission::class, 'admission_ledger_id', 'id');
    }
}
