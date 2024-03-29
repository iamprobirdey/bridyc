<?php

namespace App\Http\Controllers\User;

use App\Acheivement;
use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Stripe\Account;

class AchievementController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Request $request)
    {
        $this->authorize('view', current_user());
        $this->authorize('viewforchannel', current_user());
        $request->validate([
            'image_path' => 'mimes:jpeg,jpg,png|required|max:7000|file',
            'title' => 'required|string',
            'description' => 'required|string'
        ]);

        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpg';

        $realImage = Image::make($request->file('image_path'));
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . auth()->id() . "/achievement/";
        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(250, 200);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
            }
        } else {
            $image->resize(250, 200);
            $image->save(public_path($path) . $imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
        }

        $acheivement = Acheivement::create([
            'channel_id' => current_user()->channel->id,
            'image_path' => $imageName,
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'date' => $request->input('date')
        ]);

        return response()->json([
            'message' => true,
            'data' => $acheivement
        ]);
    }

    public function editStore(Acheivement $acheivement, Request $request)
    {
        $this->authorize('updatingAchivementByUser', $acheivement);
        $request->validate([
            'image_path' => 'mimes:jpeg,jpg,png|required|max:7000|file',
            'title' => 'required|string',
            'description' => 'required|string'
        ]);

        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpg';

        $realImage = Image::make($request->file('image_path'));
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . auth()->id() . "/achievement/";
        if (is_dir($path)) {
            if ($acheivement->image_path != null) {
                @unlink($path . $acheivement->image_path);
                //@unlink($path . 'm-' . $acheivement->image_path);
                //@unlink($path . 's-' . $acheivement->image_path);
            }
        }

        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(250, 200);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
            }
        } else {
            $image->resize(250, 200);
            $image->save(public_path($path) . $imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
        }

        $acheivement->image_path = $imageName;
        $acheivement->title = $request->input('title');
        $acheivement->description = $request->input('description');
        $acheivement->date = $request->input('date');
        $acheivement->update();


        return response()->json([
            'message' => true,
            'data' => $acheivement
        ]);
    }
}
