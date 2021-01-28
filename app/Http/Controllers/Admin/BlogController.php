<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Carbon\Carbon;
use Illuminate\Support\Str;
use App\BlogCategory;
use App\Post;
use Auth;

class BlogController extends Controller
{
    public function index()
    {
        return view('admin.blog.index');
    }

    public function create()
    {
        $categories = BlogCategory::all();

        return view('admin.blog.create', compact('categories', $categories));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image_path' => 'required', //|mimes:jpeg,png,jpg|max:2048
            'category' => 'required|array|exists:blog_categories,id',
            'content' =>  'required',
            'keyword' => 'required',
            'description' => 'required'
        ]);

        $time = Carbon::now('Asia/Kolkata');
        $image_path = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpeg';
        $realImage = Image::make($request->file('image_path'));

        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "blog/";

        $imageS->resize(350, 280);
        $imageS->save(public_path($path) . 's-' . $image_path);
        $dom = new \DomDocument();
        $dom->loadHtml($request->input('content'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        $images = $dom->getElementsByTagName('img');
        foreach ($images as $k => $img) {
            $data = $img->getAttribute('src');
            list($type, $data) = explode(';', $data);
            list(, $data)  = explode(',', $data);
            //$data = base64_decode($data);
            //image upload
            $time = Carbon::now('Asia/Kolkata');
            $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpeg';
            $realImage = Image::make($data);

            $realImage->fit(600, 600, null, 'center');
            $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
            $path = "blog/";

            $image->resize(710, 650);
            $image->save(public_path($path) . $imageName);

            $imageM->resize(400, 360);
            $imageM->save(public_path($path) . 'm-' . $imageName);

            $imageS->resize(350, 280);
            $imageS->save(public_path($path) . 's-' . $imageName);

            $img->removeAttribute('src');
            $img->setAttribute('src', 'blog/' . $imageName);
        }
        $content = $dom->saveHTML();

        Post::create([
            'user_id' => Auth::id(),
            'title' => $request->input('title'),
            'image_path' => $image_path,
            'slug' => Str::slug($request->input('title')),
            'content' => $content,
            'keyword' => $request->input('keyword'),
            'description' => $request->input('description')
        ]);

        return redirect()->back()->with('status', 'Succefully created Category');
    }

    public function listCategory()
    {
        $categories = BlogCategory::all();

        return view('admin.blog.category.index', compact('categories', $categories));
    }

    public function createCategory()
    {
        return view('admin.blog.category.create');
    }

    public function storeCategory(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        BlogCategory::create([
            'name' => $request->input('name')
        ]);

        return redirect()->back()->with('status', 'Succefully created Category');
    }
}
