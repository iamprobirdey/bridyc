<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelAccountantCashbook;
use App\ChannelAccountantLedger;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use function PHPSTORM_META\map;

class CashbookController extends Controller
{
    public function getCashbookData()
    {
        $cashbookData =  ChannelAccountantCashbook::with('ledger')->get();
        $ledgerData = ChannelAccountantLedger::all();
        return response()->json([
            'message'  => true,
            'cashbooks' => $cashbookData,
            'ledgers' => $ledgerData
        ]);
    }

    public function storeCashbookData(Channel $channel, Request $request)
    {
        $request->validate([
            'ledger_id' => 'required|integer|exists:App\ChannelAccountantLedger,id',
            'payment_type' => ['required', Rule::in(['debit', 'credit'])],
            'payment_mode' => ['required', Rule::in(['online', 'offline'])],
            'total' => 'required|numeric',
        ]);
        $cashbookData = ChannelAccountantCashbook::create([
            'channel_id' => $channel->id,
            'accountant_ledger_id' => $request->input('ledger_id'),
            'payment_type' => $request->input('payment_type'),
            'payment_mode' => $request->input('payment_mode'),
            'total' => $request->input('total')
        ]);

        $cashbookData =  ChannelAccountantCashbook::with('ledger')->where('accountant_ledger_id', $cashbookData->accountant_ledger_id)->get();

        return response()->json([
            'message' => true,
            'cashbook' => $cashbookData[0]
        ]);
    }

    public function editCashbookData($cashbookId, Request $request)
    {
        $request->validate([
            'ledger_id' => 'required|integer|exists:App\ChannelAccountantLedger,id',
            'payment_type' => ['required', Rule::in(['debit', 'credit'])],
            'payment_mode' => ['required', Rule::in(['online', 'offline'])],
            'total' => 'required|numeric',
        ]);

        $cashbookData = ChannelAccountantCashbook::find($cashbookId);
        $cashbookData->accountant_ledger_id = $request->input('ledger_id');
        $cashbookData->payment_type = $request->input('payment_type');
        $cashbookData->payment_mode  = $request->input('payment_mode');
        $cashbookData->total = $request->input('total');
        $cashbookData->save();

        return response()->json([
            'message' => true,
            'cashbook' => $cashbookData
        ]);
    }

    public function delete($cashbookId)
    {
        $cashbook = ChannelAccountantCashbook::find($cashbookId);
        $cashbook->delete();

        return response()->json([
            'msg' => true,
        ]);
    }
}
