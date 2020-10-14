<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\State\StoreStateValidation;
use App\Http\Requests\State\UpdateStateValidation;
use App\Services\ModelHelperServices;
use App\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index()
    {
        $this->authorize('superadmin', auth()->user());
        $states = $this->modelHelperServices::getStates();
        return view('admin.state.index', compact('states', $states));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());
        return view('admin.state.create');
    }

    public function store(StoreStateValidation $request)
    {
        $this->authorize('superadmin', auth()->user());
        State::create([
            'country_id' => 1,
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);

        return redirect()->back()->with('status', 'Succefully created the State');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());
        $state = State::findOrFail($id);
        return view('admin.state.updating', compact('state', $state));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'name' => 'required|string|unique:states,name,' . $id,
            'code' => 'required|string|unique:states,code,' . $id
        ]);

        $state = State::findOrFail($id);
        $state->name = $request->input('name');
        $state->code = $request->input('code');
        $state->update();
        return redirect('/admin/state/updating/' . $id)->with('status', 'Succefully updated the State');
    }
}
