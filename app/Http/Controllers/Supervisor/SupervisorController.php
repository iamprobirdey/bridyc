<?php

namespace App\Http\Controllers\Supervisor;

use App\ChannelSupervisor;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

class SupervisorController extends Controller
{
    public function index()
    {
        $supervisorData = ChannelSupervisor::with('channel')->get();
        return view('supervisor.channel_list', compact('supervisorData'));
    }

    public function test()
    {
        $supervisorData = ChannelSupervisor::with('channel')->where('id', 4)->get();

        //PDF::set_option('enable_html5_parser', TRUE);
        $pdf = PDF::loadView('supervisor.supervisor_form', compact('supervisorData'));
        //return $pdf->download($supervisorData[0]->channel->title . 'pdf');
        return $pdf->download('pro.pdf');
        //return view('supervisor.supervisor_form', compact('supervisorData'));
    }
}
