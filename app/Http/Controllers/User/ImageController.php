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

    public function getIconData()
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $channel = Channel::select('icon_avatar')
            ->where('user_id', auth()->id())
            ->first();
        return response()->json([
            'image' => $channel->icon_avatar,
            'userId' => auth()->id()
        ]);
    }

    public function storeImageIcon(StoreIconImageValidation $request)
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $time = Carbon::now('Asia/Kolkata');
        $currentUserId = current_user_id();
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpg';



        $realImage = Image::make($request->validated()['image']);
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . $currentUserId . "/avatar/";
        if (is_dir('media/channel/' . $currentUserId . '/avatar/')) {
            $avatar = Channel::where('user_id', $currentUserId)
                ->select('icon_avatar')
                ->first();
            if ($avatar->icon_avatar != null) {
                @unlink('media/channel/' . $currentUserId . '/avatar/' . $avatar->icon_avatar);
                @unlink('media/channel/' . $currentUserId . '/avatar/m-' . $avatar->icon_avatar);
                @unlink('media/channel/' . $currentUserId . '/avatar/s-' . $avatar->icon_avatar);
            }
        }
        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(130, 130);
                $image->save(public_path($path) . $imageName);
                $imageM->resize(120, 120);
                $imageM->save(public_path($path) . 'm-' . $imageName);
                $imageS->resize(90, 90);
                $imageS->save(public_path($path) . 's-' . $imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        } else {
            $image->resize(130, 130);
            $image->save(public_path($path) . $imageName);
            $imageM->resize(120, 120);
            $imageM->save(public_path($path) . 'm-' . $imageName);
            $imageS->resize(90, 90);
            $imageS->save(public_path($path) . 's-' . $imageName);
        }
        $channel = Channel::where('user_id', $currentUserId)
            ->first();
        $channel->icon_avatar = $imageName;
        $channel->save();
        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }

    public function getCoverData()
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $userId = current_user_id();
        $channel = Channel::select('cover_avatar')
            ->where('user_id', $userId)
            ->first();
        return response()->json([
            'image' => $channel->cover_avatar,
            'userId' => $userId
        ]);
    }

    public function storeImageCover(StoreCoverImageValidation $request)
    {
        $this->authorize('viewforchannel', auth()->user());
        $this->authorize('checkChannelForUser', auth()->user()->channel);
        $time = Carbon::now('Asia/Kolkata');
        $currentUserId = current_user_id();
        $imageName = $time->year . $time->month . $time->day . ($time->micro + mt_rand(11111, 99999)) . '.jpg';

        $realImage = Image::make($request->validated()['image']);
        $realImage->fit(600, 600, null, 'center');
        $image = $imageS = $imageM = Image::canvas(600, 600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . $currentUserId . "/cover/";

        if (is_dir('media/channel/' . $currentUserId)) {
            $icon = Channel::where('user_id', $currentUserId)
                ->select('cover_avatar')
                ->first();
            if ($icon->cover_avatar != null) {
                @unlink('media/channel/' . $currentUserId . '/cover/' . $icon->cover_avatar);
                @unlink('media/channel/' . $currentUserId . '/cover/m-' . $icon->cover_avatar);
                @unlink('media/channel/' . $currentUserId . '/cover/s-' . $icon->cover_avatar);
            }
        }
        if (!is_dir($path)) {
            if (File::makeDirectory(public_path($path), 0777, true)) {
                $image->resize(1300, 350);
                $image->save(public_path($path) . $imageName);
                //FacadesImageOptimizer::optimize($path.$imageName);
                ///app(Spatie\ImageOptimizer\OptimizerChain::class)->optimize($path.$imageName);
                $imageM->resize(850, 350);
                $imageM->save(public_path($path) . 'm-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'m-',$imageName);
                $imageS->resize(420, 250);
                $imageS->save(public_path($path) . 's-' . $imageName);
                //FacadesImageOptimizer::optimize($path.'s-',$imageName);
            }
        } else {
            $image->resize(1300, 350);
            $image->save(public_path($path) . $imageName);
            //FacadesImageOptimizer::optimize($path.$imageName);
            $imageM->resize(850, 350);
            $imageM->save(public_path($path) . 'm-' . $imageName);
            //FacadesImageOptimizer::optimize($path.'m-',$imageName);
            $imageS->resize(420, 250);
            $imageS->save(public_path($path) . 's-' . $imageName);
            //FacadesImageOptimizer::optimize($path.'s-',$imageName);
        }
        $channel = Channel::where('user_id', $currentUserId)
            ->first();
        $channel->cover_avatar = $imageName;
        $channel->save();
        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }
}
