<?php
namespace App\Services;
use App\Country;
use App\State;
use App\District;
use App\Village;
use App\Stream;
use App\Board;
use App\Channel;
use App\Hobby;
use App\Standard;
use App\Language;
use App\Subject;
use App\Verification;
use Auth;

class ModelHelperServices{
    //Country
    public static function getCountries(){
        return Country::all();
    }
    //District
    public static function getDistricts(){
        return District::with('state')->get();
    }

    public static function getStates(){
        return State::all();
    }

    public static function getPlacesInformation(){
        return Village::with('district.state')->get();
    }

    public static function getVillages(){
        return Village::with('district')->get();
    }

    public static function getStreams(){
        return Stream::all();
    }

    public static function getBoards(){
        return Board::all();
    }

    public static function getStandards(){
        return Standard::all();
    }
    public static function getLanguages(){
        return Language::all();
    }
    public static function getUserVerificationDetails(){
        return Verification::where('user_id',auth()->id())->first();
    }

    public static function getStateDistrictVillage(){
        return State::with('district.village')->get();
    }

    public static function getChannelData(){
        return Channel::where('user_id',auth()->id())->first();
    }
    public static function getChannelExtraData(){
        return Channel::where('user_id',auth()->id())
                        ->select('extra_attributes')
                        ->first();
    }

    public static function getAllSubject(){
        return Subject::all();
    }

    public static function getAllHobby(){
        return Hobby::all();
    }
}
?>
