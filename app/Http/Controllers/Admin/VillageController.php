<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Village\StoreVillageValidation;
use App\Http\Requests\Village\UpdateVillageValidation;
use App\Services\ModelHelperServices;
use App\Village;

class VillageController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $villages = $this->modelHelperServices::getPlacesInformation();
        return view('admin.village.index',compact('villages',$villages));
    }

    public function create(){
        $districts = $this->modelHelperServices::getDistricts();
        return view('admin.village.create',compact('districts',$districts));
    }

    public function store(StoreVillageValidation $request){
        Village::create([
            'district_id' => $request->validated()['district'],
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);
        return redirect()->back()->with('status', 'Succefully created the Village');
    }

    public function delete($id){
        $village = Village::findorFail($id);
        $village->delete();
        return redirect()->back()->with('status' , 'Deleted succefully');
    }

    public function updating($id){
        $village = Village::findOrFail($id);
        $districts = $this->modelHelperServices::getDistricts();
        return view('admin.village.updating',compact('village',$village),compact('districts',$districts));
    }

    public function update(UpdateVillageValidation $request,$id){
        $village = Village::findOrFail($id);
        $village->district_id = $request->validated()['district'];
        $village->name = $request->validated()['name'];
        $village->code = $request->validated()['code'];
        $village->update();
        return redirect('/admin/village/updating/'.$id)->with('status', 'Succefully updated the Village');
    }
}
