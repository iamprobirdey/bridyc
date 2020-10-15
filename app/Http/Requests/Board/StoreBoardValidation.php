<?php

namespace App\Http\Requests\Board;

use Illuminate\Foundation\Http\FormRequest;

class StoreBoardValidation extends FormRequest
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
            'board' => 'required|string|unique:boards,name',
            'code' => 'required|string|unique:boards,code'
        ];
    }
}
