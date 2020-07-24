<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Image\StoreIconImageValidation;
use App\Http\Requests\Image\StoreCoverImageValidation;
use Auth;
use App\Channel;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;


class ImageController extends Controller
{



    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getIconData(){
        $channel = Channel::select('icon_avatar')
                ->where('user_id',Auth::id())
                ->first();
        return response()->json([
            'image' => $channel->icon_avatar,
            'userId' => Auth::id()
        ]);
    }

    public function storeImageIcon(StoreIconImageValidation $request){
        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year.$time->month.$time->day.( $time->micro + mt_rand(11111,99999) ).'.webp';



        $realImage = Image::make($request->validated()['image']);
        $realImage->fit(600,600,null,'center');
        $image = $imageS = $imageM = Image::canvas(600,600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . Auth::id()."/";
        if(is_dir('media/channel/'.Auth::id())){
            $avatar = Channel::where('user_id',Auth::id())
                    ->select('icon_avatar')
                    ->first();
            if($avatar->icon_avatar != null){
                @unlink('media/channel/'.Auth::id().'/'.$avatar->icon_avatar);
                @unlink('media/channel/'.Auth::id().'/m-'.$avatar->icon_avatar);
                @unlink('media/channel/'.Auth::id().'/s-'.$avatar->icon_avatar);
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
        $channel = Channel::where('user_id',Auth::id())
                        ->first();
        $channel->icon_avatar = $imageName;
        $channel->save();
        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }

    public function getCoverData(){
        $channel = Channel::select('cover_avatar')
                ->where('user_id',Auth::id())
                ->first();
        return response()->json([
            'image' => $channel->cover_avatar,
            'userId' => Auth::id()
        ]);
    }

    public function storeImageCover(StoreCoverImageValidation $request){
        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year.$time->month.$time->day.( $time->micro + mt_rand(11111,99999) ).'.webp';

        $realImage = Image::make($request->validated()['image']);
        $realImage->fit(600,600,null,'center');
        $image = $imageS = $imageM = Image::canvas(600,600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . Auth::id()."/";

        if(is_dir('media/channel/'.Auth::id())){
            $icon = Channel::where('user_id',Auth::id())
            ->select('cover_avatar')
            ->first();
            if($icon->cover_avatar != null){
                @unlink('media/channel/'.Auth::id().'/'.$icon->cover_avatar);
                @unlink('media/channel/'.Auth::id().'/m-'.$icon->cover_avatar);
                @unlink('media/channel/'.Auth::id().'/s-'.$icon->cover_avatar);
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
        $channel = Channel::where('user_id',Auth::id())
                    ->first();
        $channel->cover_avatar = $imageName;
        $channel->save();
        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }

}
