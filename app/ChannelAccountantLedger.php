<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelAccountantLedger extends Model
{
    protected $fillable = ['channel_id', 'channel_accountant_ledger_id', 'name', 'payment_type', 'balance'];
}
