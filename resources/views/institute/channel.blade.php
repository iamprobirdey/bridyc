@extends('layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('layouts.sidebar')
            <br>
            <br>
            <div id="channelInDashboard">
                <channel-in-dashboard
                    :user="{{json_encode($user)}}"
                    :channel="{{json_encode($channel)}}">
                </channel-in-dashboard>
            </div>

            @section('model')
            @include('layouts.model_view')
            @endsection
        </div>
    </div>
@endsection
@section('model')
    @include('layouts.model_view')
@endsection

@section('js_code')
    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/dashboardBlade.js')}}"></script>
    <script src="{{url('js/channelInDashboard.js')}}"></script>
@endsection
