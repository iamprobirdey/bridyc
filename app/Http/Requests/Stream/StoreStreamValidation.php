<?php

namespace App\Http\Requests\Stream;

use Illuminate\Foundation\Http\FormRequest;

class StoreStreamValidation extends FormRequest
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
            'stream' => 'required|string',
        ];
    }
}
