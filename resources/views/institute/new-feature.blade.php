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
       <p class="text-center"><span class="new-feature p-2">New Features</span> coming your way!</p> 
        </main> 
    </div> 
</div> 

@endsection @section('js_code') 
                <script src="{{url('js/app.js')}}"></script>
                <script src="{{url('js/dashboardBlade.js')}}"></script>
                <script src="{{url('js/channelteacher.js')}}"></script>
                <style scoped>
                    p{
                        color:#F39C12;
                        font-size:20px;
                        font-weight:700;
                        font-family: Verdana, Geneva, Tahoma, sans-serif;
                    }
                .new-feature{
                    color:white;
                    font-size: 20px;
                    background-image: linear-gradient(to right, #990066, #831874, #67267f, #442f85, #003585);
                }
                </style>
@endsection
