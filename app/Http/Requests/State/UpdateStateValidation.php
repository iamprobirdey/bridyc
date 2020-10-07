<?php

namespace App\Http\Requests\State;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStateValidation extends FormRequest
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
            'name' => 'required|string|unique:states,name',
            'code' => 'required|string|unique:states,code'
        ];
    }
}
