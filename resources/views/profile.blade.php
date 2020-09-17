@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/profile.css')}}">
@endsection
@section('content')
<div class="container-fluid profileheader text-center">
<img class="profile-picture rounded-circle shadow" src="/images/guest.jpg" alt="student profile pictures">
</div>
<a class="profile-edit p-2 rounded" href="#"><i class="fa fa-camera" aria-hidden="true"></i></a>

@php
    //dd($userInformation)
@endphp
    <div id="student-profile">
        <student-profile
            :user="{{json_encode($user)}}"
            :channels="{{json_encode($channels)}}"
            :states="{{json_encode($states)}}"
            :districts="{{json_encode($districts)}}"
            :villages="{{json_encode($villages)}}"
            :standards="{{json_encode($standards)}}"
            :userinformation="{{json_encode($userInformation)}}"
            :subjects="{{json_encode($subjects)}}"
            :studentsubjects="{{json_encode($studentSubjects)}}"
            :hobbies="{{json_encode($hobbies)}}"
            :studenthobbies="{{json_encode($user->studentHobby)}}"
            >
        </student-profile>
    </div>
@endsection

@section('js_code')

    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/profile.js')}}"></script>

@endsection
