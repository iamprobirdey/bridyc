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
<div class="container-fluid">
    <div class="row">
        @include('layouts.sidebar')
        <main role="main" class="col-lg-10 ml-lg-auto">
            <br>
            <br>
            <div class="container">
                <div id="edit_channel">
                    <edit-channel :channel="{{json_encode($channel)}}"></edit-channel>
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
<script src="{{mix('/js/editChannel.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
