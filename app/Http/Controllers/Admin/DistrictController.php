<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\District\StoreDistrictValidation;
use App\Http\Requests\District\UpdateDistrictValidation;
use App\Services\ModelHelperServices;
use App\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
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
        $districts = $this->modelHelperServices::getDistricts();
        $states = $this->modelHelperServices::getStates();
        return view('admin.district.index', compact('districts', $districts), compact('states', $states));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());
        $states = $this->modelHelperServices::getStates();
        return view('admin.district.create', compact('states', $states));
    }

    public function store(StoreDistrictValidation $request)
    {
        $this->authorize('superadmin', auth()->user());
        District::create([
            'state_id' => $request->validated()['state'],
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);
        return redirect()->back()->with('status', 'Succefully created the District');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());
        $district = District::findOrFail($id);
        $states = $this->modelHelperServices::getStates();
        return view('admin.district.updating', compact('district', $district), compact('states', $states));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'name' => 'required|max:50|string|unique:states,name,' . $id,
            'code' => 'required|max:50|string|unique:states,code,' . $id
        ]);
        $district = District::findOrFail($id);
        $district->state_id = $request->input('state');
        $district->name = $request->input('name');
        $district->code = $request->input('code');
        $district->update();
        return redirect('/admin/district/updating/' . $id)->with('status', 'Succefully updated the District');
    }
}
