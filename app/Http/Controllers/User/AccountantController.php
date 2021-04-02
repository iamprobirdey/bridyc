<?php

namespace App\Http\Controllers\User;

use App\AccountantMonth;
use App\AdmissionMonthlyBill;
use App\ChannelAccountantAdmission;
use App\ChannelAccountantLedger;
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

    public function monthly($channelId, $admissionId)
    {
        $admission =  ChannelAccountantAdmission::where('id', $admissionId)
            ->with('standard.accountclass')
            ->with('monthlybill.month')
            ->get()[0];

        $ledger = ChannelAccountantLedger::where('admission_check', false)->get();

        $monthly = AccountantMonth::all();

        return view('institute.accountant.monthly', compact('admission', $admission), compact('ledger', $ledger))->with('monthly', $monthly);
    }

    public function receipt($channelId, $admissionId)
    {
        $admission =  ChannelAccountantAdmission::where('id', $admissionId)
            ->with('children')
            ->with('standard.accountclass')
            ->with('monthlybill.month')
            ->get()[0];

        return view('institute.accountant.receipt', compact('admission', $admission));
    }

    public function getAdmissionReceipt($channelId, $admissionId)
    {
        $admission =  ChannelAccountantAdmission::where('id', $admissionId)
            ->with('children')
            ->with('standard.accountclass')
            ->get()[0];
        $admissionChild = ChannelAccountantAdmission::where('admission_ledger_id', $admission->id)->get();
        return view('institute.accountant.receipt_download', compact('admission', $admission))
            ->with('child', $admissionChild);
    }

    public function getMonthlyReceipt($channelId, $admissionId, $monthlyBillId)
    {
        $admission =  ChannelAccountantAdmission::where('id', $admissionId)
            ->with('standard.accountclass')
            ->get()[0];
        $monthly = AdmissionMonthlyBill::where('id', $monthlyBillId)->with('billledger.ledger')->get();

        return view('institute.accountant.receipt_monthly_download', compact('admission', $admission), compact('monthly', $monthly));
    }
}
