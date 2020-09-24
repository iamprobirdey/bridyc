@extends('student.layouts.master')

@section('title','')
@section('desc','')
@section('keywords','')


@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/profile.css')}}">
@endsection
@section('content')

<div id="teacher-profile">
    <teacher-profile :user="{{json_encode($user)}}" :channels="{{json_encode($channels)}}"
        :states="{{json_encode($states)}}" :districts="{{json_encode($districts)}}"
        :villages="{{json_encode($villages)}}" :standards="{{json_encode($standards)}}"
        :userinformation="{{json_encode($userInformation)}}" :subjects="{{json_encode($subjects)}}"
        :studentsubjects="{{json_encode($studentSubjects)}}" :userinstitute="{{json_encode($userinstitute)}}">
    </teacher-profile>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/teacherProfile.js')}}"></script>

@endsection
