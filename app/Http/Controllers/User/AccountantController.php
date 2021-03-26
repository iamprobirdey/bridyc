<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AccountantController extends Controller
{
    public function index()
    {
        return view('institute.accountant.index');
    }

    public function ledger()
    {
        return view('institute.accountant.ledger');
    }

    public function cashbook()
    {
        return view('institute.accountant.cashbook');
    }

    public function admission()
    {
        return view('institute.accountant.admission');
    }
}
