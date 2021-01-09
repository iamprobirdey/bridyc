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
<link rel="stylesheet" type="text/css" href="{{url('css/application.css')}}">
@endsection
@section('content')
<div class="">
    {{-- <div class="blocks">
        <div class="block orange"></div>
        <div class="block blue"></div>
    </div>
    <div class="comingsoon">
        <h5>Coming soon!</h5>
        <p>This form is under construction</p>
    </div> --}}
    <br>
    <br>
    <br>
    <div id="application">
        <application></application>
    </div>

</div>

@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/application.js')}}"></script>

@endsection
