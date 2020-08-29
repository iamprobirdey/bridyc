<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Subject\StoreSubjectValidation;
use App\Services\ModelHelperServices;
use App\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $subjects = $this->modelHelperServices::getAllSubject();
        return view('admin.subject.index',compact('subjects',$subjects));
    }

    public function create(){
        return view('admin.subject.create');
    }

    public function store(StoreSubjectValidation $request){
        Subject::create([
            'name' => $request->validated()['subject']
        ]);
        return redirect()->back()->with('status', 'Succefully created the subject');
    }

    public function updating($id){
        $subject = Subject::findOrFail($id);
        return view('admin.subject.updating',compact('subject',$subject));
    }

    public function update(StoreSubjectValidation $request,$id){
        $subject = Subject::findOrFail($id);
        $subject->name = $request->validated()['subject'];
        $subject->update();
        return redirect('/admin/subject/updating/'.$id)->with('status', 'Succefully updated the subject');
    }
}
