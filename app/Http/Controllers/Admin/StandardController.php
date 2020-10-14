<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Standard\StoreStandardValidation;
use App\Http\Requests\Standard\UpdateStandardValidation;
use App\Services\ModelHelperServices;
use App\Standard;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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
            'standard_name' => Str::ucfirst($request->validated()['standard']),
            'code' => strtolower($request->validated()['code']),
        ]);
        return redirect()->back()->with('status', 'Succefully created the Standard');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());
        $standard = Standard::findOrFail($id);
        return view('admin.standard.updating', compact('standard', $standard));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'standard' => 'required|string|unique:standards,standard_name,' . $id,
            'code' => 'required|string|unique:standards,code,' . $id,
        ]);
        $standard = Standard::findOrFail($id);
        $standard->standard_name = Str::ucfirst($request->input('standard'));
        $standard->code = strtolower($request->input('code'));
        $standard->update();
        return redirect('/admin/standard/updating/' . $id)->with('status', 'Succefully updated the Standard');
    }
}
