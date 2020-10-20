@extends('student.layouts.master')

@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and
activities and provide access to students and parents in particular, who are looking for
cross-training their minds before choosing an institute or a career. The platform will allow
students to share their learnings, learn from their peers and from the people who have already
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance
in Assam,
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school,
career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website
link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for
students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career
video')


@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/profile.css')}}">
@endsection
@section('content')
<div class="container-fluid profileheader">
</div>
<div id="teacher-profile" class="container">
    <teacher-profile :user="{{json_encode($user)}}" :channels="{{json_encode($channels)}}"
        :states="{{json_encode($states)}}" :districts="{{json_encode($districts)}}"
        :villages="{{json_encode($villages)}}" :userinformation="{{json_encode($userInformation)}}"
        :subjects="{{json_encode($subjects)}}" :studentsubjects="{{json_encode($studentSubjects)}}"
        :userinstitute="{{json_encode($userinstitute)}}">
    </teacher-profile>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/teacherProfile.js')}}"></script>

@endsection
