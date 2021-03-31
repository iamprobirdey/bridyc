<?php

namespace App\Http\Controllers\User;

use App\AccountantClass;
use App\AccountantMonth;
use App\AdmissionStandard;
use App\Channel;
use App\ChannelAccountantAdmission;
use App\ChannelSchoolSession;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Illuminate\Validation\Rule;

class AdmissionController extends Controller
{
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
        return response()->json([
            'data' => $classData
        ]);
    }

    public function getAdmissionData(Channel $channel)
    {
        $accountantAdmssion =  ChannelAccountantAdmission::where('channel_id', $channel->id)->with('standard.accountclass')->get();
        return response()->json([
            'data' => $accountantAdmssion
        ]);
    }

    public function storeAdmissionData(Channel $channel, Request $request)
    {
        $data = $request->validate([
            'admission_number' => 'required|integer|unique:channel_accountant_admissions',
            'name' => 'required',
            'roll_number' => 'required',
            'phone' => 'required|integer',
            'father_name' => 'required',
            'category' => 'required',
        ]);

        $request->validate([
            'class' => 'required|exists:App\AccountantClass,id',
        ]);

        DB::beginTransaction();
        try {
            $data['channel_id'] = $channel->id;
            $admissionData =  ChannelAccountantAdmission::create($data);
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

                if ($standard->accountant_class_id === $request->input('class_name')) {
                    $standardDataSearch = AdmissionStandard::find($standard->id);
                    $standardDataSearch->accountant_class_id = $request->input('class_name');
                    $standardDataSearch->current_class_state = 'present';
                    $standardDataSearch->save();
                }
                if (
                    $standard->accountant_class_id != $request->input('class_name') &&
                    $standard->current_class_state === 'present'
                ) {
                    $standardDataSearch = AdmissionStandard::find($standard->id);
                    $standardDataSearch->current_class_state = 'old';
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
