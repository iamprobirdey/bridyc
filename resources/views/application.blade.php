@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/application.css')}}">
@endsection
@section('content')
    <div class="applbody container-fluid">
        <div class="blocks">
            <div class="block orange"></div>
            <div class="block blue"></div>
        </div>
        <div class="comingsoon">
        <h5>Coming soon!</h5>
        <p>This form is under construction</p>
        </div>
    </div>

@endsection
