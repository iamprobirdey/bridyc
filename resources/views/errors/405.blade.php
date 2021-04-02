@extends('student.layouts.master')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/index.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/error.css')}}">
@endsection
@section('content')
<div class="container-fluid errorbody text-center">
    <p>OOPS!</p>
    <p class="desc">Something went wrong</p>
    <a class="homepagelink" href="{{url('/')}}">Go to Homepage <i class="fa fa-external-link"
            aria-hidden="true"></i></a>
</div>
@endsection
