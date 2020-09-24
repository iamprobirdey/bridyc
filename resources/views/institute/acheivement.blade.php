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
            <div id="channelAchievement">
                <channel-achievement :achievement="{{json_encode($achievement)}}">
                </channel-achievement>

                @php
                //dd(gettype($authId));
                @endphp
            </div>
        </main>

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
<script src="{{url('js/achievement.js')}}"></script>
@endsection
