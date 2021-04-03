<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdmissionMonthlyBill extends Model
{
    protected $fillable = ['acountant_admissions_id', 'accountant_months_id', 'payment_status'];

    public function admission()
    {
        return $this->belongsTo(ChannelAccountantAdmission::class, 'ccountant_admissions_id', 'id');
    }

    public function month()
    {
        return $this->belongsTo(AccountantMonth::class, 'accountant_months_id', 'id');
    }
    public function billledger()
    {
        return $this->hasMany(AdmissionMonthlyBillLedger::class, 'monthly_bill_id', 'id');
    }
}
