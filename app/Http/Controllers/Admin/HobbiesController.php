<?php

namespace App\Http\Controllers\Admin;

use App\Hobby;
use App\Http\Controllers\Controller;
use App\Http\Requests\Hobby\StoreHobbyValidation;
use App\Services\ModelHelperServices;

class HobbiesController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $hobbies = $this->modelHelperServices::getAllHobby();
        return view('admin.hobby.index',compact('hobbies',$hobbies));
    }

    public function create(){
        return view('admin.hobby.create');
    }

    public function store(StoreHobbyValidation $request){
        Hobby::create([
            'name' => $request->validated()['hobby']
        ]);
        return redirect()->back()->with('status', 'Succefully created the hobby');
    }

    public function updating($id){
        $hobby = Hobby::findOrFail($id);
        return view('admin.hobby.updating',compact('hobby',$hobby));
    }

    public function update(StoreHobbyValidation $request,$id){
        $hobby = Hobby::findOrFail($id);
        $hobby->name = $request->validated()['hobby'];
        $hobby->update();
        return redirect('/admin/hobby/updating/'.$id)->with('status', 'Succefully updated the hobby');
    }
}
