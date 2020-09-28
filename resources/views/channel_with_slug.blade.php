@extends('student.layouts.master')

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
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/institutelandingpage.css')}}">
@endsection
@section('content')

<div id="channelwithslug" class="mb-n5 mt-2 mx-0" style="background-color:white;">
    <channel-with-slug :user="{{json_encode($user)}}" :channel="{{json_encode($channel)}}"
        :currentuser="{{json_encode($currentUser)}}">
    </channel-with-slug>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/channelwithslug.js')}}"></script>

@endsection
