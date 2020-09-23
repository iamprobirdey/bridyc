@extends('student.layouts.master')



@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/institutelandingpage.css')}}">
@endsection
@section('content')
    <div id="channelwithslug" class="mb-n5 mt-2 mx-0" style="background-color:white;">
        <channel-with-slug
            :user="{{json_encode($user)}}"
            :id="{{json_encode($userId)}}"
            :channel="{{json_encode($channel)}}">
        </channel-with-slug>
    </div>
@endsection

@section('js_code')

    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/channelwithslug.js')}}"></script>

@endsection
