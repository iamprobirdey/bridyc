@extends('layouts.master')


@section('title')

{{$channel[0]->title}} {{$channel[0]->language->name}} {{$channel[0]->district->name}} {{$channel[0]->village->name}}
{{$channel[0]->state->name}}
@endsection

@section('desc')
@if($channel[0]->description != null)
{{$channel[0]->description}} {{$channel[0]->language->name}} {{$channel[0]->district->name}}
{{$channel[0]->village->name}}
{{$channel[0]->state->name}}
@endif
@endsection

@section('s_url', (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]")
@section('s_type', "Insitute .{{$channel[0]->village->name}} .' '.{{$channel[0]->state->name}}")
@section('s_title', $channel[0]->title)
@section('s_desc', strip_tags($channel[0]->description))
@if($channel[0]->icon_avatar != null)
@section('s_img', url('/media/channel/'.$channel[0]->user_id.'/s-'.$channel[0]->icon_avatar))
@endif


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
                <div id="edit_channel">
                    <edit-channel :channel="{{json_encode($channel)}}" :user="{{json_encode($user)}}"></edit-channel>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{mix('js/app.js')}}"></script>
<script src="{{mix('js/dashboardBlade.js')}}"></script>
<script src="{{mix('js/editChannel.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
