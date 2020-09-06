<?php

namespace App\Http\Controllers\User;

use App\Acheivement;
use App\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class AchievementController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Channel $channel,Request $request){
        $request->validate([
            'image_path' => 'required',
            'title' => 'required|string',
            'description' => 'required|string'
        ]);

        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year.$time->month.$time->day.( $time->micro + mt_rand(11111,99999) ).'.webp';

        $realImage = Image::make($request->input('image_path'));
        $realImage->fit(600,600,null,'center');
        $image = $imageS = $imageM = Image::canvas(600,600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . auth()->id()."/achievement/";
        if(!is_dir($path)){
            if(File::makeDirectory(public_path($path), 0777, true)){
                $image->resize(600, 600);
                $image->save(public_path($path).$imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                $imageM->resize(300,300);
                $imageM->save(public_path($path).'m-'.$imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                $imageS->resize(200,200);
                $imageS->save(public_path($path).'s-'.$imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        }else{
            $image->resize(600, 600);
            $image->save(public_path($path).$imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
            $imageM->resize(300,300);
            $imageM->save(public_path($path).'m-'.$imageName);
            //FacadesImageOptimizer::optimize($path.'m-',$imageName);
            $imageS->resize(200,200);
            $imageS->save(public_path($path).'s-'.$imageName);
            //FacadesImageOptimizer::optimize($path.'s-',$imageName);
        }

        $acheivement = Acheivement::create([
                        'user_id' => auth()->id(),
                        'channel_id' => $channel->id,
                        'image_path' => $path.$imageName,
                        'title' => $request->input('title'),
                        'description' => $request->input('description')
                    ]);

        return response()->json([
            'message' => true,
            'data' => $acheivement
        ]);
    }

    public function editStore($achievementId , Channel $channel,Request $request){

        $request->validate([
            'image_path' => 'required',
            'title' => 'required|string',
            'description' => 'required|string'
        ]);

        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year.$time->month.$time->day.( $time->micro + mt_rand(11111,99999) ).'.webp';

        $realImage = Image::make($request->input('image_path'));
        $realImage->fit(600,600,null,'center');
        $image = $imageS = $imageM = Image::canvas(600,600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . auth()->id()."/achievement/";
        $acheivement = Acheivement::find($achievementId);
        if(is_dir($path)){
            if($acheivement->image_path != null){
                @unlink($path.$acheivement->image_path);
                @unlink($path.'m-'.$acheivement->image_path);
                @unlink($path.'s-'.$acheivement->image_path);
            }
        }

        if(!is_dir($path)){
            if(File::makeDirectory(public_path($path), 0777, true)){
                $image->resize(600, 600);
                $image->save(public_path($path).$imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                $imageM->resize(300,300);
                $imageM->save(public_path($path).'m-'.$imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                $imageS->resize(200,200);
                $imageS->save(public_path($path).'s-'.$imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        }else{
            $image->resize(600, 600);
            $image->save(public_path($path).$imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
            $imageM->resize(300,300);
            $imageM->save(public_path($path).'m-'.$imageName);
            //FacadesImageOptimizer::optimize($path.'m-',$imageName);
            $imageS->resize(200,200);
            $imageS->save(public_path($path).'s-'.$imageName);
            //FacadesImageOptimizer::optimize($path.'s-',$imageName);
        }

        $acheivement->image_path = $imageName;
        $acheivement->title = $request->input('title');
        $acheivement->description = $request->input('description');
        $acheivement->update();


        return response()->json([
            'message' => true,
            'data' => $acheivement
        ]);
    }
}
