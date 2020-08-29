<?php

namespace App\Http\Controllers\Admin;

use App\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index(){
        return view('admin.contact.index',[
            'contacts' => Contact::all()
        ]);
    }

    public function enquiry(Request $request,$contactId){
        $contact = Contact::findOrFail($contactId);
        $contact->enquired = 'checked';
        $contact->save();
        return redirect()->back();
    }
}
