<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Village\StoreVillageValidation;
use App\Http\Requests\Village\UpdateVillageValidation;
use App\Services\ModelHelperServices;
use App\Village;
use Illuminate\Http\Request;

class VillageController extends Controller
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
        $villages = $this->modelHelperServices::getPlacesInformation();
        return view('admin.village.index', compact('villages', $villages));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());

        $districts = $this->modelHelperServices::getDistricts();
        return view('admin.village.create', compact('districts', $districts));
    }

    public function store(StoreVillageValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        Village::create([
            'district_id' => $request->validated()['district'],
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);
        return redirect()->back()->with('status', 'Succefully created the Village');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());

        $village = Village::findOrFail($id);
        $districts = $this->modelHelperServices::getDistricts();
        return view('admin.village.updating', compact('village', $village), compact('districts', $districts));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'district' => 'required|integer|exists:App\District,id',
            'name' => 'required|max:60|string|unique:villages,name,' . $id,
            'code' => 'required|max:60|string|unique:villages,code,' . $id
        ]);
        $village = Village::findOrFail($id);
        $village->district_id = $request->input('district');
        $village->name = $request->input('name');
        $village->code = $request->input('code');
        $village->update();
        return redirect('/admin/village/updating/' . $id)->with('status', 'Succefully updated the Village');
    }
}
