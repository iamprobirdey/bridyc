<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Stream\StoreStreamValidation;
use App\Http\Requests\Stream\UpdateStreamValidation;
use App\Services\ModelHelperServices;
use App\Stream;

class StreamController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $streams = $this->modelHelperServices::getStreams();
        return view('admin.stream.index',compact('streams',$streams));
    }

    public function create(){
        return view('admin.stream.create');
    }

    public function store(StoreStreamValidation $request){
        Stream::create([
            'stream' => $request->validated()['stream']
        ]);
        return redirect()->back()->with('status', 'Succefully created the Stream');
    }

    public function delete($id){
        $stream = Stream::findorFail($id);
        $stream->delete();
        return redirect()->back()->with('status' , 'Deleted succefully');
    }

    public function updating($id){
        $stream = Stream::findOrFail($id);
        return view('admin.stream.updating',compact('stream',$stream));
    }

    public function update(UpdateStreamValidation $request,$id){
        $stream = Stream::findOrFail($id);
        $stream->stream = $request->validated()['stream'];
        $stream->update();
        return redirect('/admin/stream/updating/'.$id)->with('status', 'Succefully updated the Stream');
    }
}
