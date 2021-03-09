<?php

namespace App\Http\Controllers\Supervisor;

use App\Channel;
use App\ChannelSupervisor;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use Barryvdh\Snappy\Facades\SnappyPdf as PDF;
//use Barryvdh\DomPDF\PDF;
use PDF;

class SupervisorController extends Controller
{
    public function index()
    {
        return view('supervisor.dashboard');
    }

    public function report()
    {
        $supervisorData = ChannelSupervisor::with('channel')->get();
        return view('supervisor.channel_list', compact('supervisorData'));
    }

    public function test($id)
    {
        $supervisorData = ChannelSupervisor::with('channel')->where('id', $id)->get();
        $pdf = PDF::loadView('supervisor.supervisor_form', compact('supervisorData'));
        return $pdf->stream('document.pdf');
    }

    public function test2()
    {
        $supervisorData = ChannelSupervisor::with('channel')->where('id', 4)->get();

        $pdf = PDF::loadView('supervisor.supervisor_form', compact('supervisorData'));
        return $pdf->stream('document.pdf');
    }

    public function view($id)
    {
        $supervisorData = ChannelSupervisor::with('channel')->where('id', $id)->get();
        return view('supervisor.supervisor_view', compact('supervisorData'));
    }
}
