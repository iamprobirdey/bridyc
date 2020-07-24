<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Country\CountryValidation;
use App\Services\ModelHelperServices;
use App\Country;

class CountryController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $countries = $this->modelHelperServices::getCountries();
        return view('admin.country.index',compact('countries'));
    }

    public function create(){
        return view('admin.country.create');
    }

    public function store(CountryValidation $request){
        Country::create([
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);
        return redirect('admin/country');
    }

    public function updating($id){
        $country = Country::findOrFail($id);
        return view('admin.country.updating',compact('country',$country));
    }

    public function update(CountryValidation $request,$id){
        $country = Country::findOrFail($id);
        $country->name = $request->validated()['name'];
        $country->code = $request->validated()['code'];
        $country->update();
        return redirect('/admin/country/updating/'.$id)->with('status', 'Succefully updated the Country');
    }
}
