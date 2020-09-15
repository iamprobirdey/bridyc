<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserEducationValidation;
use Illuminate\Http\Request;
use App\Http\Requests\User\StoreUserGenderValidation;
use App\User;
use App\UserEducation;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function storeGender(StoreUserGenderValidation $request){
        $user  = User::findOrFail(auth()->id());
        $user->gender  = $request->validated()['gender'];
        $user->vission = $request->validated()['vission'];
        $user->update();

        return response()->json([
            'message' => true
        ]);
    }

    public function storeEducation(StoreUserEducationValidation $request){
        auth()->user()->addEducation($request->validated());
        return response()->json([
            'message' => true
        ]);
    }
    public function storeEditEducation($id , StoreUserEducationValidation $request){
        $user  = UserEducation::findOrFail($id);
        $user->update($request->validated());
        return response()->json([
                    'message' => true,
                    'user' => $user
                ]);
    }

    public function storeAvatar(Request $request){
        $request->validate([
            'image' => 'required'
        ]);
        $time = Carbon::now('Asia/Kolkata');
        $imageName = $time->year.$time->month.$time->day.( $time->micro + mt_rand(11111,99999) ).'.webp';



        $realImage = Image::make($request->input('image'));
        $realImage->fit(600,600,null,'center');
        $image = $imageS = $imageM = Image::canvas(600,600, '#ffffff')->insert($realImage);
        $path = "media/channel/" . auth()->id()."/profile/";
        if(is_dir($path)){
            $avatar = auth()->user()->avatar;
            if($avatar != null){
                @unlink($path.$avatar);
                @unlink($path.'m-'.$avatar);
                @unlink($path.'s-'.$avatar);
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
        $user = User::find(auth()->id());
        $user->avatar = $imageName;
        $user->update();
        return response()->json([
            'message' => true,
            'image' => $imageName
        ]);
    }


}
