<?php

namespace App\Http\Requests\Infrastructure;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'boys_hostel' => 'required|string', Rule::in(['yes', 'no']),
            'girls_hostel' => 'required|string', Rule::in(['one', 'two']),
            'computer_learning' => 'required|string', Rule::in(['yes', 'no']),
            'canteen' => 'required|string', Rule::in(['yes', 'no']),
            'stationary' => 'required|string', Rule::in(['yes', 'no']),
            'wall' => 'required|string', Rule::in(['no_wall', 'fence', 'wall']),
            'library' => 'required|string', Rule::in(['yes', 'no']),
            'no_of_books' => 'required|integer',
            'playground' => 'required|string', Rule::in(['yes', 'no']),
            'bus_services' => 'required|string', Rule::in(['yes', 'no']),
        ];
    }
}
