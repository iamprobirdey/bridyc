<?php

namespace App\Http\Requests\Hobby;

use Illuminate\Foundation\Http\FormRequest;

class StoreHobbyValidation extends FormRequest
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
            'hobby' => 'required|string|unique:hobbies,name',
            'code' => 'required|string|unique:hobbies,code'
        ];
    }
}
