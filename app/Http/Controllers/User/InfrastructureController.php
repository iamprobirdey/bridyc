<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Infrastructure\InfrastructureValidation;
use App\Channel;
use Auth;

class InfrastructureController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getUserData()
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $user = Channel::select(
            [
                'id',
                'no_of_class',
                'canteen',
                'stationary',
                'boys_hostel',
                'girls_hostel',
                'computer_learning',
                'wall',
                'library',
                'no_of_books',
                'playground',
                'bus_services'
            ]
        )
            ->where('user_id', auth()->id())
            ->first();
        return response()->json([
            'user' => $user
        ]);
    }
    public function storeUserInformation(InfrastructureValidation $request, $Id)
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $channel = Channel::findOrFail($Id);
        $channel->no_of_class = $request->validated()['no_of_class'];
        $channel->boys_hostel = $request->validated()['boys_hostel'];
        $channel->girls_hostel = $request->validated()['girls_hostel'];
        $channel->computer_learning = $request->validated()['computer_learning'];
        $channel->canteen = $request->validated()['canteen'];
        $channel->stationary = $request->validated()['stationary'];
        $channel->wall = $request->validated()['wall'];
        $channel->library = $request->validated()['library'];
        $channel->no_of_books = $request->validated()['no_of_books'];
        $channel->playground = $request->validated()['playground'];
        $channel->bus_services = $request->validated()['bus_services'];
        $channel->update();

        return response()->json([
            'channel' => $channel
        ]);
    }
}
