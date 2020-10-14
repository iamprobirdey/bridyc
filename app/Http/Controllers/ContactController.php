<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContact;
use App\Contact;

class ContactController extends Controller
{
    public function store(StoreContact $request)
    {
        Contact::create([
            'name' => $request->validated()['name'],
            'email' => $request->validated()['email'],
            'phone' => $request->validated()['phone'],
            'message' => $request->validated()['message'],
            'enquired' => 'not-checked'
        ]);
        return response()->json([
            'message' => true
        ]);
    }
}
