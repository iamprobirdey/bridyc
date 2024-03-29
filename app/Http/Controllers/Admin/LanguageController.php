<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Language\Languagevalidation;
use App\Services\ModelHelperServices;
use App\Language;

class LanguageController extends Controller
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

        $language = $this->modelHelperServices::getLanguages();
        return view('admin.language.index', compact('language'));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());

        return view('admin.language.create');
    }

    public function store(Languagevalidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        Language::create([
            'name' => $request->validated()['name'],
            'code' => $request->validated()['code']
        ]);
        return redirect()->back()->with('status', 'Succefully created the Language');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());

        $language = Language::findOrFail($id);
        return view('admin.language.updating', compact('language', $language));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());

        $request->validate([
            'name' => 'required|max:50|string|unique:languages,name,' . $id,
            'code' => 'required|max:50|string|unique:languages,name,' . $id
        ]);

        $language = Language::findOrFail($id);
        $language->name = $request->input('name');
        $language->code = $request->input('code');
        $language->update();
        return redirect('/admin/language/updating/' . $id)->with('status', 'Succefully updated the Language');
    }
}
