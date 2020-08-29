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

    public function getUserData(){
        $user = Channel::select(
                [
                    'id',
                    'no_of_class',
                    'boys_toilet',
                    'girls_toilet',
                    'computer_learning',
                    'electricity',
                    'wall',
                    'library',
                    'no_of_books',
                    'playground'
                ])
            ->where('user_id',Auth::Id())
            ->get();
        return response()->json([
            'user' => $user
        ]);
    }
    public function storeUserInformation(InfrastructureValidation $request,$Id){
        $channel = Channel::findOrFail($Id);
        $channel->no_of_class = $request->validated()['no_of_class'];
        $channel->boys_toilet = $request->validated()['boys_toilet'];
        $channel->girls_toilet = $request->validated()['girls_toilet'];
        $channel->computer_learning = $request->validated()['computer_learning'];
        $channel->electricity = $request->validated()['electricity'];
        $channel->wall = $request->validated()['wall'];
        $channel->library = $request->validated()['library'];
        $channel->no_of_books = $request->validated()['no_of_books'];
        $channel->playground = $request->validated()['playground'];
        $channel->hostel = $request->validated()['hostel'];
        $channel->bus_services = $request->validated()['bus_services'];
        $channel->update();

        return response()->json([
            'channel' => $channel
        ]);
    }
}
