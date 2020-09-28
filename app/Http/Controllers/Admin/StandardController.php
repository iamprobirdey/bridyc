<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Standard\StoreStandardValidation;
use App\Http\Requests\Standard\UpdateStandardValidation;
use App\Services\ModelHelperServices;
use App\Standard;

class StandardController extends Controller
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

        $standards = $this->modelHelperServices::getStandards();
        return view('admin.standard.index', compact('standards', $standards));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());

        return view('admin.standard.create');
    }

    public function store(StoreStandardValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        Standard::create([
            'standard_name' => $request->validated()['standard']
        ]);
        return redirect()->back()->with('status', 'Succefully created the Standard');
    }

    public function delete($id)
    {
        $this->authorize('superadmin', auth()->user());

        $standard = Standard::findorFail($id);
        $standard->delete();
        return redirect()->back()->with('status', 'Deleted succefully');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());

        $standard = Standard::findOrFail($id);
        return view('admin.standard.updating', compact('standard', $standard));
    }

    public function update(UpdateStandardValidation $request, $id)
    {
        $this->authorize('superadmin', auth()->user());

        $standard = Standard::findOrFail($id);
        $standard->standard_name = $request->validated()['standard'];
        $standard->update();
        return redirect('/admin/standard/updating/' . $id)->with('status', 'Succefully updated the Standard');
    }
}
