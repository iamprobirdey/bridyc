<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\PhoneVerification;
use App\User;
use Illuminate\Http\Request;

class PhoneNumberVerificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function phoneVerification(User $user)
    {
        try {
            $otp = rand(100000, 999999);
            PhoneVerification::create([
                'user_id' => $user->id,
                'phone' => $user->phone,
                'code' => $otp
            ]);
            // Account details
            $apiKey = urlencode(config('services.sms.api'));

            // Message details
            $numbers = array(91 . $user->phone);
            $sender = urlencode('TXTLCL');
            $message = rawurlencode('Hi samrat from textlocal');

            $numbers = implode(',', $numbers);

            // Prepare data for POST request
            $data = array('apikey' => $apiKey, 'numbers' => $numbers, "sender" => $sender, "message" => $message);

            // Send the POST request with cURL
            $ch = curl_init('https://api.textlocal.in/send/');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close($ch);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                422
            ]);
        }
    }
}
