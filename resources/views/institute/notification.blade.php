@extends('layouts.master')


@section('title','')
@section('desc','')
@section('keywords','')


@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('content')
<div class="container-fluid">
    <div class="row">
        @include('layouts.sidebar')
        <main role="main" class="col-lg-10 ml-lg-auto">
            <br>
            <br>
            <div class="container">
                <div id="channel-notification">
                    <channel-notification :notification="{{json_encode($notification)}}" :channelid="{{$channelId}}">
                    </channel-notification>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{mix('/js/app.js')}}"></script>
<script src="{{mix('/js/dashboardBlade.js')}}"></script>
<script src="{{mix('/js/ChannelNotification.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
