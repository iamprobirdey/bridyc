<?php

namespace App\Http\Requests\Infrastructure;

use Illuminate\Foundation\Http\FormRequest;

class InfrastructureValidation extends FormRequest
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
            'no_of_class' => 'required|numeric',
            'boys_toilet' => 'required|string',
            'girls_toilet' => 'required|string',
            'computer_learning' => 'required|string',
            'electricity' => 'required|string',
            'wall' => 'required|string',
            'library' => 'required|string',
            'no_of_books' => 'required|string',
            'playground' => 'required|string'
        ];
    }
}
