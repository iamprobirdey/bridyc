<?php

namespace App\Http\Controllers;

use App\TotalSiteVisit;
use Illuminate\Http\Request;

class TotalSiteVisitController extends Controller
{
    public function store(Request $request)
    {
        TotalSiteVisit::create([
            'user_ip_address' => $request->ip()
        ]);
        return response()->json([
            'message' => true
        ]);
    }
}
