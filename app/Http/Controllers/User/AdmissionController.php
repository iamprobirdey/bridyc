<?php

namespace App\Http\Controllers\User;

use App\AccountantClass;
use App\AccountantMonth;
use App\AdmissionMonthlyBill;
use App\AdmissionStandard;
use App\Channel;
use App\ChannelAccountantAdmission;
use App\ChannelAccountantLedger;
use App\ChannelSchoolSession;
use App\Http\Controllers\Controller;
use App\Rules\AccountantAdmissionRule;
use Illuminate\Http\Request;
use DB;
use Illuminate\Validation\Rule;
use Carbon\Carbon as Carbon;

class AdmissionController extends Controller
{
    public function test()
    {
        $lastMonth = Carbon::now()->subMonth()->format('F');
        $accountMonth = AccountantMonth::where('name', $lastMonth)->get()[0];
        $admissionData = ChannelAccountantAdmission::select('id', 'channel_id', 'created_at')
            ->whereMonth(
                'created_at',
                '=',
                Carbon::now()->subMonth()->month
            )
            ->get();

        foreach ($admissionData as $admission) {
            $schoolSessionData = ChannelSchoolSession::where('channel_id', $admission->channel_id)->get()[0];
            if (
                $accountMonth->id >= $schoolSessionData->start_session_id &&
                $accountMonth->id <= $schoolSessionData->end_session_id

            ) {
                AdmissionMonthlyBill::create([
                    'acountant_admissions_id' => $admission->id,
                    'accountant_months_id' => $accountMonth->id,
                    'payment_status' => 'pending'
                ]);
            }
        }
    }


    public function getSchoolSession(Channel $channel)
    {
        $session = ChannelSchoolSession::where('channel_id', $channel->id)->exists();
        $monthsData = AccountantMonth::all();

        return response()->json([
            'session' => $session,
            'months' => $monthsData
        ]);
    }

    public function store(Channel $channel, Request $request)
    {
        $request->validate([
            'start_session_id' => 'required|integer|exists:App\AccountantMonth,id',
            'end_session_id' => 'required|integer|exists:App\AccountantMonth,id',
        ]);

        ChannelSchoolSession::create([
            'channel_id' => $channel->id,
            'start_session_id' => $request->input('start_session_id'),
            'end_session_id' => $request->input('end_session_id')
        ]);
        return response()->json([
            'message' => true
        ]);
    }

    public function  getClassData()
    {
        $classData =  AccountantClass::all();
        $ledger = ChannelAccountantLedger::where('admission_check', true)->get();
        return response()->json([
            'data' => $classData,
            'ledger' => $ledger
        ]);
    }

    public function getAdmissionData(Channel $channel, Request $request)
    {
        $accountantAdmssion = new ChannelAccountantAdmission();

        if ($request->has('search') && $request->input('search')) {
            $accountantAdmssion = $accountantAdmssion->where('admission_number', $request->input('search'));
        }

        if ($request->has('category') && $request->input('category')) {
            $accountantAdmssion = $accountantAdmssion->where('category', $request->input('category'));
        }

        $accountantAdmssion = $accountantAdmssion->where('channel_id', $channel->id);

        $accountantAdmssion = $accountantAdmssion->with('standard.accountclass');

        $accountantAdmssion = $accountantAdmssion->get();
        // $accountantAdmssion =  ChannelAccountantAdmission::
        //where('channel_id', $channel->id)
        // ->with('standard.accountclass')
        // ->get();
        return response()->json([
            'data' => $accountantAdmssion
        ]);
    }

    public function storeAdmissionData(Channel $channel, Request $request)
    {
        $data = $request->validate([
            'admission_number' => ['required', 'integer', new AccountantAdmissionRule($channel->id)],
            'name' => 'required',
            'roll_number' => 'required',
            'phone' => 'required|integer',
            'father_name' => 'required',
            'category' => 'required',
            'admission_ledger_id' => "required|integer|exists:App\ChannelAccountantLedger,id",
            'payment_mode' => "required",
            'balance_taken' => "required|integer",
        ]);

        $request->validate([
            'class' => 'required|exists:App\AccountantClass,id',
        ]);

        DB::beginTransaction();
        try {
            $old_balance = 0;
            if ($request->input('total_balance') > $request->input('balance_taken')) {
                $old_balance = $request->input('total_balance') - $request->input('balance_taken');
            }
            $admissionData =  ChannelAccountantAdmission::create([
                'channel_id' => $channel->id,
                'admission_number' => $request->input('admission_number'),
                'name' => $request->input('name'),
                'roll_number' => $request->input('roll_number'),
                'phone' => $request->input('phone'),
                'father_name' => $request->input('father_name'),
                'category' => $request->input('category'),
                'admission_ledger_id' => $request->input('admission_ledger_id'),
                'payment_mode' => $request->input('payment_mode'),
                'balance_taken' => $request->input('balance_taken'),
                'total_balance' => $request->input('total_balance'),
                'old_balance' => $old_balance
            ]);

            AdmissionStandard::create([
                'channel_accountant_admissions_id' => $admissionData->id,
                'accountant_class_id' => $request->input('class')
            ]);
            DB::commit();
            $admissionData = ChannelAccountantAdmission::where('id', $admissionData->id)->with('standard.accountclass')->get();

            return response()->json([
                'message' => true,
                'data' => $admissionData
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
            return response()->json([
                'error' => true
            ]);
        }
    }

    //edit
    public function editStandardData($admissionId, $channelId, $classId, $choice, Request $request)
    {
        $data = [];
        if ($choice === 'edit') {
            $admissionData = ChannelAccountantAdmission::where('id', $admissionId)->with('standard')->get();
            foreach ($admissionData[0]->standard as $standard) {
                // if ($standard->accountant_class_id === $request->input('class_name')) {
                //     $standardDataSearch = AdmissionStandard::find($standard->id);
                //     $standardDataSearch->accountant_class_id = $request->input('class_name');
                //     $standardDataSearch->current_class_state = 'present';
                //     $standardDataSearch->save();
                // }
                if (
                    $standard->accountant_class_id != $request->input('class_name') &&
                    $standard->current_class_state === 'present' &&
                    count($admissionData[0]->standard) > 1
                ) {
                    $standardDataSearch = AdmissionStandard::find($standard->id);
                    $standardDataSearch->current_class_state = 'old';
                    $standardDataSearch->save();
                }
                if (
                    $standard->accountant_class_id != $request->input('class_name') &&
                    $standard->current_class_state === 'present' &&
                    count($admissionData[0]->standard)  === 1
                ) {
                    $standardDataSearch = AdmissionStandard::find($standard->id);
                    $standardDataSearch->accountant_class_id = $request->input('class_name');
                    $standardDataSearch->save();
                }
            }

            $data = ChannelAccountantAdmission::where('id', $admissionId)->with('standard.accountclass')->get();
        }

        if ($choice === 'promote') {

            $admissionData = ChannelAccountantAdmission::where('id', $admissionId)->with('standard')->get();

            foreach ($admissionData[0]->standard as $standard) {
                if ($standard->current_class_state === 'present') {
                    $standardDataSearch = AdmissionStandard::find($standard->id);
                    $standardDataSearch->current_class_state = 'old';
                    $standardDataSearch->save();
                }
            }

            AdmissionStandard::create([
                'channel_accountant_admissions_id' => $admissionId,
                'accountant_class_id' => $request->input('class_name')
            ]);

            $data = ChannelAccountantAdmission::where('id', $admissionId)->with('standard.accountclass')->get();
        }

        return response()->json([
            'choice' => $choice,
            'data' => $data
        ]);
    }
}
