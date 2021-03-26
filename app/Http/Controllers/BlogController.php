<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::select('title', 'image_path', 'description', 'slug')->get();
        return view('blog_index', compact('posts', $posts));
    }

    public function slug($slug)
    {
        $post = Post::where('slug', $slug)->first();
        return view('blog_slug', compact('post', $post));
    }
}
