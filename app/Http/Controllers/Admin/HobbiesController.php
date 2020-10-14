<?php

namespace App\Http\Controllers\Admin;

use App\Hobby;
use App\Http\Controllers\Controller;
use App\Http\Requests\Hobby\StoreHobbyValidation;
use App\Services\ModelHelperServices;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HobbiesController extends Controller
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

        $hobbies = $this->modelHelperServices::getAllHobby();
        return view('admin.hobby.index', compact('hobbies', $hobbies));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());

        return view('admin.hobby.create');
    }

    public function store(StoreHobbyValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        Hobby::create([
            'name' => Str::ucfirst($request->validated()['hobby']),
            'code' => strtolower($request->validated()['code'])
        ]);
        return redirect()->back()->with('status', 'Succefully created the hobby');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());

        $hobby = Hobby::findOrFail($id);
        return view('admin.hobby.updating', compact('hobby', $hobby));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'hobby' => 'required|string|unique:hobbies,name,' . $id,
            'code' => 'required|string|unique:hobbies,code,' . $id
        ]);
        $hobby = Hobby::findOrFail($id);
        $hobby->name = Str::ucfirst($request->input(['hobby']));
        $hobby->code = strtolower($request->input(['code']));
        $hobby->update();
        return redirect('/admin/hobby/updating/' . $id)->with('status', 'Succefully updated the hobby');
    }
}
