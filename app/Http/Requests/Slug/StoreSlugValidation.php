<?php

namespace App\Http\Requests\Slug;

use Illuminate\Foundation\Http\FormRequest;

class StoreSlugValidation extends FormRequest
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
            'slug' => 'required|string|unique:channels'
        ];
    }
}
