<?php

namespace App\Http\Controllers\User;

use App\AdmissionMonthlyBill;
use App\AdmissionMonthlyBillLedger;
use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class MonthlyBillController extends Controller
{
    public function payMonthlyBillData($monthlyId, Request $request)
    {
        $request->validate([
            'ledger_id' => "required|integer|exists:App\ChannelAccountantLedger,id",
        ]);
        $monthlyBill = AdmissionMonthlyBill::find($monthlyId);
        $monthlyBill->payment_status = 'paid';
        $monthlyBill->save();
        $d = AdmissionMonthlyBillLedger::create([
            'monthly_bill_id' => $monthlyId,
            'accountant_ledger_id' => $request->input('ledger_id')
        ]);

        return response()->json([
            'message' => true
        ]);
    }

    public function dueMonthlyBillData($admissionId, Request $request)
    {
        $bill = AdmissionMonthlyBill::create([
            'acountant_admissions_id' => $admissionId,
            'accountant_months_id' => $request->input('monthly_id'),
            'payment_status' => 'paid',
        ]);

        AdmissionMonthlyBillLedger::create([
            'monthly_bill_id' => $bill->id,
            'accountant_ledger_id' => $request->input('ledger_id')
        ]);

        $bill = AdmissionMonthlyBill::where('id', $bill->id)->with('month')->get();
        return response()->json([
            'message' => true,
            'data' => $bill[0]
        ]);
    }
}
