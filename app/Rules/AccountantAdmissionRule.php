<?php

namespace App\Rules;

use App\ChannelAccountantAdmission;
use Illuminate\Contracts\Validation\Rule;

class AccountantAdmissionRule implements Rule
{
    protected $channelId = null;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($channelid)
    {
        $this->channelId = $channelid;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return !ChannelAccountantAdmission::where('channel_id', $this->channelId)->where('admission_number', $value)->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute already exist.';
    }
}
