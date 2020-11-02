<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Subject\StoreSubjectValidation;
use App\Services\ModelHelperServices;
use App\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SubjectController extends Controller
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

        $subjects = $this->modelHelperServices::getAllSubject();
        return view('admin.subject.index', compact('subjects', $subjects));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());

        return view('admin.subject.create');
    }

    public function store(StoreSubjectValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        Subject::create([
            'name' => Str::ucfirst($request->validated()['subject']),
            'code' => strtolower($request->validated()['code'])
        ]);
        return redirect()->back()->with('status', 'Succefully created the subject');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());

        $subject = Subject::findOrFail($id);
        return view('admin.subject.updating', compact('subject', $subject));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'subject' => 'required|max:50|string|unique:subjects,name,' . $id,
            'code' => 'required|max:50|string|unique:subjects,code,' . $id,
        ]);
        $subject = Subject::findOrFail($id);
        $subject->name = $request->input('subject');
        $subject->code = $request->input('code');
        $subject->update();
        return redirect('/admin/subject/updating/' . $id)->with('status', 'Succefully updated the subject');
    }
}
