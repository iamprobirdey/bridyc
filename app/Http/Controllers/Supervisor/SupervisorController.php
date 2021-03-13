<?php

namespace App\Http\Controllers\Supervisor;

use App\Channel;
use App\ChannelSupervisor;
use App\District;
use App\Http\Controllers\Controller;
use App\TotalSiteVisit;
use Illuminate\Http\Request;
//use Barryvdh\Snappy\Facades\SnappyPdf as PDF;
//use Barryvdh\DomPDF\PDF;
use PDF;

class SupervisorController extends Controller
{
    public function index()
    {
        $channelCount = Channel::count();
        $totalSiteVisit = TotalSiteVisit::count();
        return view(
            'supervisor.dashboard',
            compact(['channelCount', 'totalSiteVisit'])
        );
    }

    public function getChannelData()
    {
        $allChannels = Channel::with(['expenseIncome', 'district'])->get();
        $districts = District::all();
        return response()->json([
            'channels' => $allChannels,
            'districts' => $districts
        ]);
    }

    public function getChannelDataByDistrict($districtId)
    {
        $allChannels = Channel::with(['expenseIncome'])->where('district_id', $districtId)->get();
        return response()->json([
            'channels' => $allChannels,
        ]);
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
