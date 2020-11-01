<?php

namespace App\Http\Requests\District;

use Illuminate\Foundation\Http\FormRequest;

class StoreDistrictValidation extends FormRequest
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
            'state' => 'required|integer|exists:App\State,id',
            'name' => 'required|string|max:50|unique:App\District,name',
            'code' => 'required|string|max:50|unique:App\District,code'
        ];
    }
}
