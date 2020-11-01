<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\StoreBoardValidation;
use App\Http\Requests\Board\UpdateBoardValidation;
use App\Services\ModelHelperServices;
use App\Board;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BoardController extends Controller
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
        $boards = $this->modelHelperServices::getBoards();
        return view('admin.board.index', compact('boards', $boards));
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());
        return view('admin.board.create');
    }

    public function store(StoreBoardValidation $request)
    {
        $this->authorize('superadmin', auth()->user());
        Board::create([
            'name' => Str::ucfirst($request->validated()['board']),
            'code' => strtolower($request->validated()['code'])
        ]);
        return redirect()->back()->with('status', 'Succefully created the board');
    }

    public function updating($id)
    {
        $this->authorize('superadmin', auth()->user());
        $board = Board::findOrFail($id);
        return view('admin.board.updating', compact('board', $board));
    }

    public function update(Request $request, $id)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'board' => 'required|max:50|string|unique:boards,name,' . $id,
            'code' => 'required|max:50|string|unique:boards,code,' . $id
        ]);
        $board = Board::findOrFail($id);
        $board->name = Str::ucfirst($request->input('board'));
        $board->code = strtolower($request->input('code'));
        $board->update();
        return redirect('/admin/board/updating/' . $id)->with('status', 'Succefully updated the board');
    }
}
