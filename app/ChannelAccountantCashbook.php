<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelAccountantCashbook extends Model
{
    protected $fillable = [
        'channel_id',
        'accountant_ledger_id',
        'payment_type',
        'payment_mode',
        'total'
    ];

    public function ledger()
    {
        return $this->belongsTo(ChannelAccountantLedger::class, 'accountant_ledger_id', 'id');
    }
}
