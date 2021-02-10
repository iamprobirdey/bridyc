<?php

namespace App\Http\Requests\Application;

use Illuminate\Foundation\Http\FormRequest;

class ApplicationStoringRequest extends FormRequest
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
            'state_id' =>  "required|numeric|exists:states,id",
            'district_id' =>  "required|numeric|exists:districts,id",
            'village_id' =>  "required|numeric|exists:villages,id",
            'language_id' =>  "required|numeric|exists:languages,id",
            'title' =>  "required|string|max:40",
            'udise' =>  "nullable|string",
            'location' =>  "required",
            'ownership' =>  ["required", Rule::in(['private', 'government'])],
            'founded' =>  "required|date",
            'pin' =>  "required|digits:6",
            'gender' =>  ["required", Rule::in(['only_boys', 'only_girls', 'both'])]
        ];
    }
}
