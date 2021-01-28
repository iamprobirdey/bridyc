<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::select('title', 'image_path', 'description', 'content')->first();
        return view('blog_index', compact('posts', $posts));
    }
}
