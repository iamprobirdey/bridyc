<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Verification;
use App\Jobs\ChannelStatusProcessor;

class VerificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $users = Verification::with([
                'user',
                'state',
                'district',
                'village',
                'language']
                )->get();
        return view('admin.verification.verification',compact('users'));
    }

    public function updatingforon($userId,$Id){
        $verification = Verification::findOrfail($Id);
        if($verification->user_id === intval($userId)){
            $verification->status = 2;
            $verification->update();
            ChannelStatusProcessor::dispatch($userId);
        }
        return response()->json([
            'msg' => true
        ]);
    }

    public function updatingforoff($userId,$Id){
        $verification = Verification::findOrfail($Id);
        if($verification->user_id === intval($userId)){
            $verification->status = 1;
            $verification->update();
            //ChannelStatusProcessor::dispatch($userId);
        }
        return response()->json([
            'msg' => true
        ]);
    }
    public function updatingforblock($userId,$Id){
        $verification = Verification::findOrfail($Id);
        if($verification->user_id === intval($userId)){
            $verification->status = 3;
            $verification->update();
            //ChannelStatusProcessor::dispatch($userId);
        }
        return response()->json([
            'msg' => true
        ]);
    }
}
