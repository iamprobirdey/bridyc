<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdmissionStandard extends Model
{
    protected $fillable = ['channel_accountant_admissions_id', 'accountant_class_id'];

    public function accountclass()
    {
        return $this->belongsTo(AccountantClass::class, 'accountant_class_id', 'id');
    }
}
