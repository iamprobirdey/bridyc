<?php

namespace App\Http\Controllers\Admin;

use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Verification;
use App\Jobs\ChannelStatusProcessor;
use App\User;
use App\Http\Requests\Slug\StoreSlugValidation;

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
            //ChannelStatusProcessor::dispatch($userId);
            $channel = Channel::where('user_id',$userId)->first();
            $channel->status = 1;
            $channel->update();
        }

        $user = User::findOrFail($userId);
        $user->status = 1;
        $user->update();

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
            $channel = Channel::where('user_id',$userId)->first();
            $channel->status = 0;
            $channel->update();
        }

        $user = User::findOrFail($userId);
        $user->status = 0;
        $user->update();

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
            $channel = Channel::where('user_id',$userId)->first();
            $channel->status = 2;
            $channel->update();
        }

        $user = User::findOrFail($userId);
        $user->status = 2;
        $user->update();

        return response()->json([
            'msg' => true
        ]);
    }

    public function slugGenerator($userId,StoreSlugValidation $request){
        $channel = Channel::where('user_id',$userId)->first();
        $channel->slug = $request->validated()['slug'];
        $channel->save();
        $verification = Verification::where('user_id',$userId)->first();
        $verification->slug_creation = 'created';
        $verification->save();
        return response()->json([
            'msg' => true
        ]);
    }
}
