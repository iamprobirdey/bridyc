<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\ChannelCollegeImages;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class ChannelCollegeImagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Channel $channel, Request $request)
    {
        $request->validate([
            'image' => 'required'
        ]);
        $this->authorize('viewforchannel', current_user());
        $this->authorize('checkChannelForUser', $channel);
        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.webp';



        $realImage = Image::make($request->input('image'));
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . current_user_id() . "/college/";
        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(780, 430);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                $imageM->resize(480, 220);
                $imageM->save(public_path($path) . 'm-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                $imageS->resize(360, 220);
                $imageS->save(public_path($path) . 's-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        } else {
            $image->resize(780, 430);
            $image->save(public_path($path) . $imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
            $imageM->resize(480, 220);
            $imageM->save(public_path($path) . 'm-' . $imageName);
            //FacadesImageOptimizer::optimize($path.'m-',$imageName);
            $imageS->resize(360, 220);
            $imageS->save(public_path($path) . 's-' . $imageName);
            //FacadesImageOptimizer::optimize($path.'s-',$imageName);
        }
        current_user()->channel->collegeImage()->create(['image_path' => $imageName]);
        return response()->json([
            'message' => true,
            'image' => current_user()->channel->collegeImage
        ]);
    }

    public function delete($imageId)
    {
        $currentUserId = current_user_id();
        $image = ChannelCollegeImages::findOrFail($imageId);
        if ($image->image_path != null) {
            @unlink('media/channel/' . $currentUserId . '/college/' . $image->image_path);
            @unlink('media/channel/' . $currentUserId . '/college/m-' . $image->image_path);
            @unlink('media/channel/' . $currentUserId . '/college/s-' . $image->image_path);
        }
        $image->delete();

        return response()->json([
            'message' => true
        ]);
    }
}
