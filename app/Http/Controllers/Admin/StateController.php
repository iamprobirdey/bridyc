<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\State\StoreStateValidation;
use App\Http\Requests\State\UpdateStateValidation;
use App\Services\ModelHelperServices;
use App\State;
class StateController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $states = $this->modelHelperServices::getStates();
        return view('admin.state.index',compact('states',$states));
    }

    public function create(){
        return view('admin.state.create');
    }

    public function store(StoreStateValidation $request){
        State::create([
            'country_id' => 1,
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);

        return redirect()->back()->with('status', 'Succefully created the State');
    }

    public function delete($id){
        $state = State::findorFail($id);
        $state->delete();
        return redirect()->back()->with('status' , 'Deleted succefully');
    }

    public function updating($id){
        $state = State::findOrFail($id);
        return view('admin.state.updating',compact('state',$state));
    }

    public function update(UpdateStateValidation $request,$id){
        $state = State::findOrFail($id);
        $state->name = $request->validated()['name'];
        $state->code = $request->validated()['code'];
        $state->update();
        return redirect('/admin/state/updating/'.$id)->with('status', 'Succefully updated the State');
    }
}
