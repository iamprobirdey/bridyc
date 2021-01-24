@extends('student.layouts.master')

@section('title')
{{$channeldata[0]->title}} {{$channeldata[0]->language->name}} {{$channeldata[0]->district->name}}
{{$channeldata[0]->village->name}}
{{$channeldata[0]->state->name}}
@endsection


@section('s_url', (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]")
@section('s_type', "Insitute .{{$channeldata[0]->village->name}} .' '.{{$channeldata[0]->state->name}}")
@section('s_title', $channeldata[0]->title)
@section('s_desc', strip_tags($channeldata[0]->description))
@if($channeldata[0]->icon_avatar != null)
@section('s_img', url('/media/channel/'.$channeldata[0]->user_id.'/s-'.$channeldata[0]->icon_avatar))
@endif


@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/institutelandingpage.css')}}">
@endsection


@section('keywords', $channeldata[0]->meta_keywords)

@section('desc', $channeldata[0]->meta_descriptions)


@section('content')
<div id="channelwithslug" class="mb-n5 mt-2 mx-0" style="background-color:white;">
    <channel-with-slug :user="{{json_encode($user)}}" :channel="{{json_encode($channeldata[0])}}"
        :currentuser="{{json_encode($currentUser)}}" :isteacher="{{json_encode($isTeacher)}}"
        :userid="{{json_encode($userId)}}" :location="{{json_encode($location)}}">
    </channel-with-slug>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/channelwithslug.js')}}"></script>
<script src="{{url('/dist/vue-social-sharing.js')}}"></script>

@endsection
