<?php

namespace App\Http\Requests\Meta;

use Illuminate\Foundation\Http\FormRequest;

class StoreMetaKeywordsDescriptionsValidation extends FormRequest
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
            'meta_keywords' => 'required|string',
            'meta_descriptions' => 'required|string'
        ];
    }
}
