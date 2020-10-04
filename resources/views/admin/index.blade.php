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
        @include('admin.sidebar')
        <main role="main" class="col-lg-10 ml-lg-auto">
            <br>
            <br>

            <div class="container">
                @yield('adminContent')
            </div>
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{url('js/dashboardBlade.js')}}"></script>
@endsection
