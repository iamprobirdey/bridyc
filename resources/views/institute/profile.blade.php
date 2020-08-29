@extends('layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection
@php

@endphp
@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('layouts.sidebar')
            <main role="main" class="col-lg-10 ml-lg-auto">
                <br>
                <br>
                <div class="container">
                    <div id="channel-profile">
                        <channel-profile :user="{{json_encode($user)}}"></channel-profile>
                    </div>
                </div>
              </main>
        </div>
    </div>
@endsection
@section('model')
    @include('layouts.model_view')
@endsection

@section('js_code')
    <script src="{{mix('/js/app.js')}}"></script>
    <script src="{{mix('/js/dashboardBlade.js')}}"></script>
    <script src="{{mix('/js/ChannelProfile.js')}}"></script>
    {{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
