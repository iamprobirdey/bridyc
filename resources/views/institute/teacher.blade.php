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
            <div id="channelTeacher">
                @php
                //dd($teacher);
                @endphp
                <channel-teacher :teacher="{{json_encode($teacher)}}">
                </channel-teacher>
            </div>
        </main>
    </div>
</div>
@endsection


@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
<script src="{{url('js/channelteacher.js')}}"></script>
@endsection
