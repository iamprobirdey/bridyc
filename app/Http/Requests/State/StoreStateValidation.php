<?php

namespace App\Http\Requests\State;

use Illuminate\Foundation\Http\FormRequest;

class StoreStateValidation extends FormRequest
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
            'name' => 'required|string|unique:states,name|max:50',
            'code' => 'required|string|unique:states,code|max:50'
        ];
    }
}
