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

    public function index()
    {
        $this->authorize('superadmin', auth()->user());
        $countries = $this->modelHelperServices::getCountries();
        return view('admin.country.index', compact('countries'));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());
        return view('admin.country.create');
    }

    public function store(CountryValidation $request)
    {
        $this->authorize('superadmin', auth()->user());
        Country::create([
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);
        return redirect('admin/country');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());
        $country = Country::findOrFail($id);
        return view('admin.country.updating', compact('country', $country));
    }

    public function update(CountryValidation $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $country = Country::findOrFail($id);
        $country->name = $request->validated()['name'];
        $country->code = $request->validated()['code'];
        $country->update();
        return redirect('/admin/country/updating/' . $id)->with('status', 'Succefully updated the Country');
    }
}
