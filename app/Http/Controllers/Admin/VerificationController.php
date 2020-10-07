<?php

namespace App\Http\Controllers\Admin;

use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs\ChannelStatusProcessor;
use App\User;
use App\Http\Requests\Slug\StoreSlugValidation;
use App\Verification;
use Carbon\Carbon;

class VerificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $this->authorize('superadmin', auth()->user());

        $users = Verification::with([
            'user',
            'state',
            'district',
            'village',
            'language'
        ])->get();
        return view('admin.verification.verification', compact('users'));
    }

    public function updatingforon(User $user, $verification)
    {
        $this->authorize('superadmin', auth()->user());

        try {
            $channel = Channel::where('user_id', $user->id)->first();
            if ($channel->slug == null) {
                return response()->json([
                    'error' => true
                ]);
            }
            $channel->status = 1;
            $channel->update();

            $verification = Verification::findOrfail($verification);
            $verification->status = 2;
            $verification->update();


            $user->status = 1;
            $user->verified_at = Carbon::now();
            $user->update();

            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function updatingforoff(User $user, $verification)
    {
        $this->authorize('superadmin', auth()->user());

        try {
            $verification = Verification::findOrfail($verification);
            $verification->status = 1;
            $verification->update();

            //ChannelStatusProcessor::dispatch($userId);
            $channel = Channel::where('user_id', $user->id)->first();
            $channel->status = 0;
            $channel->update();

            $user->status = 0;
            $user->update();

            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function updatingforblock(User $user, $Id)
    {
        $this->authorize('superadmin', auth()->user());

        try {
            $verification = Verification::findOrfail($Id);
            $verification->status = 3;
            $verification->update();
            //ChannelStatusProcessor::dispatch($userId);
            $channel = Channel::where('user_id', $user->id)->first();
            $channel->status = 2;
            $channel->update();

            $user->status = 2;
            $user->blocked_at = Carbon::now();
            $user->update();

            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function slugGenerator($userId, StoreSlugValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        try {
            $channel = Channel::where('user_id', $userId)->first();
            $channel->slug = $request->validated()['slug'];
            $channel->save();
            $verification = Verification::where('user_id', $userId)->first();
            $verification->slug_creation = 'created';
            $verification->save();
            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function deleteUser(User $user)
    {
        $this->authorize('superadmin', auth()->user());

        $user->delete();
        return response()->json([
            'msg' => true
        ]);
    }
}
