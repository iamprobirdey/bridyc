<?php

namespace App\Http\Requests\Village;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVillageValidation extends FormRequest
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
            'district' => 'required|integer|exists:App\District,id',
            'name' => 'required|string|unique:villages,name',
            'code' => 'required|string|unique:villages,code'
        ];
    }
}
