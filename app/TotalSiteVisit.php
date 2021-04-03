<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TotalSiteVisit extends Model
{
    protected $fillable = ['user_ip_address'];
}
