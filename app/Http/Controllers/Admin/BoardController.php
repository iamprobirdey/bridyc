<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\StoreBoardValidation;
use App\Http\Requests\Board\UpdateBoardValidation;
use App\Services\ModelHelperServices;
use App\Board;

class BoardController extends Controller
{
    protected $modelHelperServices;
    public function __construct(ModelHelperServices $modelHelperServices)
    {
        $this->modelHelperServices = $modelHelperServices;
        $this->middleware('auth');
    }

    public function index(){
        $boards = $this->modelHelperServices::getBoards();
        return view('admin.board.index',compact('boards',$boards));
    }

    public function create(){
        return view('admin.board.create');
    }

    public function store(StoreBoardValidation $request){
        Board::create([
            'name' => $request->validated()['board']
        ]);
        return redirect()->back()->with('status', 'Succefully created the board');
    }

    public function delete($id){
        $board = Board::findorFail($id);
        $board->delete();
        return redirect()->back()->with('status' , 'Deleted succefully');
    }

    public function updating($id){
        $board = Board::findOrFail($id);
        return view('admin.board.updating',compact('board',$board));
    }

    public function update(UpdateBoardValidation $request,$id){
        $board = Board::findOrFail($id);
        $board->name = $request->validated()['board'];
        $board->update();
        return redirect('/admin/board/updating/'.$id)->with('status', 'Succefully updated the board');
    }
}
