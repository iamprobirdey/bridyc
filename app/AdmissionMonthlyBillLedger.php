<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdmissionMonthlyBillLedger extends Model
{
    protected $fillable = ['monthly_bill_id', 'accountant_ledger_id'];

    public function ledger()
    {
        return $this->belongsTo(ChannelAccountantLedger::class, 'accountant_ledger_id', 'id');
    }
}
