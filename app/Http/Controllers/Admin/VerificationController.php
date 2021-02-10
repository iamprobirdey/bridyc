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
use Illuminate\Support\Str;
use DB;

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

    public function getSlugOfChannel($userId)
    {
        $channel = Channel::where('user_id', $userId)->select('slug')->first();
        return response()->json([
            'message' => true,
            'channel_slug' => $channel->slug
        ]);
    }

    public function updatingforon(User $user, $verification)
    {
        $this->authorize('superadmin', auth()->user());
        DB::beginTransaction();
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
            DB::commit();
            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function updatingforoff(User $user, $verification)
    {
        $this->authorize('superadmin', auth()->user());
        DB::beginTransaction();
        try {
            $verification = Verification::findOrfail($verification);
            $verification->status = 1;
            $verification->update();

            //ChannelStatusProcessor::dispatch($userId);
            $channel = Channel::where('user_id', $user->id)->first();
            $channel->status = 0;
            $channel->update();

            $user->status = 0;
            $user->blocked_at = null;
            $user->update();
            DB::commit();
            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
    public function updatingforblock(User $user, $Id)
    {
        $this->authorize('superadmin', auth()->user());
        DB::beginTransaction();
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
            DB::commit();
            return response()->json([
                'msg' => true
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function slugGenerator($userId, StoreSlugValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        try {
            $channel = Channel::where('user_id', $userId)->first();
            $channel->slug = Str::slug($request->validated()['slug']);
            $channel->update();
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

    public function changeTitle($userId, Request $request)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'institute_title' => 'required|string'
        ]);
        if (Channel::where('title', $request->input('institute_title'))->exists()) {
            return response()->json([
                'error' => true
            ]);
        }

        $channel = Channel::where('user_id', $userId)->first();
        $channel->title = $request->input('institute_title');
        $channel->slug = Str::slug($request->input('institute_title'));
        $channel->save();

        return response()->json([
            'message' => true
        ]);
    }
}
