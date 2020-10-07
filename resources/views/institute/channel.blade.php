@extends('layouts.master')


@section('title')
{{$channel->title}} {{$channel->language->name}} {{$channel->district->name}} {{$channel->village->name}}
{{$channel->state->name}}
@endsection

@section('desc')
@if($channel->description != null)
{{$channel->description}} {{$channel->language->name}} {{$channel->district->name}} {{$channel->village->name}}
{{$channel->state->name}}
@endif
@endsection

@section('s_url', (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]")
@section('s_type', "Insitute .{{$channel->village->name}} .' '.{{$channel->state->name}}")
@section('s_title', $channel->title)
@section('s_desc', strip_tags($channel->description))
@if($channel->icon_avatar != null)
@section('s_img', url('/media/channel/'.$channel->user_id.'/s-'.$channel->icon_avatar))
@endif

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('content')
<div>

    @include('layouts.sidebar')
    <br>
    <br>
    <div id="channelInDashboard">
        <channel-in-dashboard :user="{{json_encode($user)}}" :channel="{{json_encode($channel)}}">
        </channel-in-dashboard>
    </div>

</div>
@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
<script src="{{url('js/channelInDashboard.js')}}"></script>
@endsection
