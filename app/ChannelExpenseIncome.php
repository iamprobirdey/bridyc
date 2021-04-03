<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelExpenseIncome extends Model
{
    protected $fillable = ['channel_id', 'expense', 'income'];
}
