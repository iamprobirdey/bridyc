<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ChannelVerificationValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'state_id' =>  "required|numeric",
            'district_id' =>  "required|numeric",
            'village_id' =>  "required|numeric",
            'language_id' =>  "required|numeric",
            'title' =>  "required",
            'udise' =>  "required",
            'location' =>  "required",
            'ownership' =>  "required",
            'founded' =>  "required",
            'pin' =>  "required",
            'gender' =>  "required"
        ];
    }
}
