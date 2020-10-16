<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Podcast;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class PodcastController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $this->authorize('superadmin', auth()->user());
        return view('admin.podcast.index', [
            'podcasts' => Podcast::all()
        ]);
    }

    public function create()
    {
        $this->authorize('superadmin', auth()->user());
        return view('admin.podcast.create');
    }

    public function store(Request $request)
    {
        $this->authorize('superadmin', auth()->user());
        $request->validate([
            'image_path' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'thumbnail' => 'required|string',
            'name' => 'required|string',
            'designation' => 'required|string',
            'summary' => 'required|string',
            'youtube_link' => 'required|string|url'
        ]);
        try {
            $time = Carbon::now('Asia/Kolkata');
            $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.webp';
            $realImage = Image::make($request->file('image_path'));

            //->getRealPath()
            $realImage->fit(600, 600, null, 'center');
            $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
            $path = "podcast/";
            if (!is_dir($path)) {
                if (File::makeDirectory(public_path($path), 0775, true)) {

                    $image->resize(710, 650);
                    $image->save(public_path($path) . $imageName);
                    //FacadesImageOptimizer::optimize($path.$imageName);
                    ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                    $imageM->resize(400, 360);
                    $imageM->save(public_path($path) . 'm-' . $imageName);
                    $imageS->resize(350, 280);
                    $imageS->save(public_path($path) . 's-' . $imageName);
                    //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                }
            } else {
                $image->resize(710, 650);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                $imageM->resize(400, 360);
                $imageM->save(public_path($path) . 'm-' . $imageName);

                $imageS->resize(350, 280);
                $imageS->save(public_path($path) . 's-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }

            Podcast::create([
                'image_path'  => $imageName,
                'thumbnail' => $request->input('thumbnail'),
                'name' => $request->input('name'),
                'designation' => $request->input('designation'),
                'summary' => $request->input('summary'),
                'youtube_link' => $request->input('youtube_link')
            ]);
            return redirect()->back()->with('status', 'Podcast Created succefully');
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function delete(Podcast $podcast)
    {
        $this->authorize('superadmin', auth()->user());
        try {
            $path = "podcast/";
            @unlink($path . $podcast->image_path);
            @unlink($path . 'm-' . $podcast->image_path);
            @unlink($path . 's-' . $podcast->image_path);
            $podcast->delete();
            return redirect()->back()->with('delete', 'Podcast Deleted succefully');
        } catch (\Throwable $th) {
            report($th);
        }
    }

    public function updating(Podcast $podcast)
    {
        $this->authorize('superadmin', auth()->user());

        return view('admin.podcast.update', [
            'podcast' => $podcast
        ]);
    }

    public function update(Podcast $podcast, Request $request)
    {
        $this->authorize('superadmin', auth()->user());

        try {
            $validated = $request->validate([
                'image_path' => 'required|image|mimes:jpeg,png,jpg|max:2048',
                'thumbnail' => 'required|string',
                'name' => 'required|string',
                'designation' => 'required|string',
                'summary' => 'required|string',
                'youtube_link' => 'required|string|url'
            ]);
            $time = Carbon::now('Asia/Kolkata');
            $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.webp';
            $realImage = Image::make($request->file('image_path'));
            //->getRealPath()
            $realImage->fit(600, 600, null, 'center');
            $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
            $path = "podcast/";
            @unlink($path . $podcast->image_path);
            @unlink($path . 'm-' . $podcast->image_path);
            @unlink($path . 's-' . $podcast->image_path);
            if (!is_dir($path)) {
                if (File::makeDirectory(public_path($path), 0777, true)) {

                    $image->resize(700, 650);
                    $image->save(public_path($path) . $imageName);
                    //FacadesImageOptimizer::optimize($path.$imageName);
                    ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                    $imageM->resize(390, 360);
                    $imageM->save(public_path($path) . 'm-' . $imageName);

                    $imageS->resize(350, 280);
                    $imageS->save(public_path($path) . 's-' . $imageName);
                    //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                }
            } else {
                $image->resize(700, 650);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                $imageM->resize(390, 360);
                $imageM->save(public_path($path) . 'm-' . $imageName);

                $imageS->resize(350, 280);
                $imageS->save(public_path($path) . 's-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
            }

            $podcast->image_path  = $imageName;
            $podcast->thumbnail = $validated['thumbnail'];
            $podcast->name = $validated['name'];
            $podcast->designation = $validated['designation'];
            $podcast->summary = $validated['summary'];
            $podcast->youtube_link = $validated['youtube_link'];
            $podcast->update();
            return redirect()->back()->with('status', 'Podcast Created succefully');
        } catch (\Throwable $th) {
            report($th);
        }
    }
}
