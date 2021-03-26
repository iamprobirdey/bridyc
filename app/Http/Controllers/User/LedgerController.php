<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelAccountantLedger;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class LedgerController extends Controller
{
    public function getLedgerData()
    {
        $channelLedgerData = ChannelAccountantLedger::select(['id', 'channel_id', 'name', 'payment_type', 'balance', 'channel_accountant_ledger_id'])->get();
        return response()->json([
            'data' => $channelLedgerData
        ]);
    }

    public function storeLedgerData(Channel $channel, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'payment_type' => ['required', Rule::in(['debit', 'credit'])],
            'balance' => 'required|numeric',
        ]);
        $ledgerData =  ChannelAccountantLedger::create([
            'channel_id' => $channel->id,
            'name' => $request->input('name'),
            'payment_type' => $request->input('payment_type'),
            'balance' => $request->input('balance')
        ]);

        $ledgerData = ChannelAccountantLedger::find($ledgerData);

        return response()->json([
            'message' => true,
            'data' => $ledgerData[0]
        ]);
    }

    public function editLedgerData($ledgerId, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'payment_type' => ['required', Rule::in(['debit', 'credit'])],
            'balance' => 'required|numeric',
        ]);

        $ledger = ChannelAccountantLedger::find($ledgerId);

        $ledger->name = $request->input('name');
        $ledger->payment_type = $request->input('payment_type');
        $ledger->balance = $request->input('balance');
        $ledger->save();

        return response()->json([
            'msg' => true,
            'data' => $ledger
        ]);
    }

    public function deleteParentLedger($ledgerId)
    {
        $ledger = ChannelAccountantLedger::find($ledgerId);
        $ledger->delete();
        return response()->json([
            'msg' => true
        ]);
    }

    public function storeChildLedger(Channel $channel, $ledgerId, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'payment_type' => ['required', Rule::in(['debit', 'credit'])],
            'balance' => 'required|numeric',
        ]);
        $ledgerData =  ChannelAccountantLedger::create([
            'channel_id' => $channel->id,
            'channel_accountant_ledger_id' => $ledgerId,
            'name' => $request->input('name'),
            'payment_type' => $request->input('payment_type'),
            'balance' => $request->input('balance')
        ]);
        return response()->json([
            'message' => true,
            'data' => $ledgerData
        ]);
    }
}
