<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserEducationValidation extends FormRequest
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
            'school_name' => 'required',
            'degree' => 'required',
            'field_of_study' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'grade' => 'required',
            'activities_and_sociaties' => 'required',
            'description' => 'required'
        ];
    }
}
