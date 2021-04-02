@extends('layouts.master')


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
                <h2>Admission Number : {{$admission->admission_number}}
                </h2>
                <h2>Admission Details</h2>
                <h2>Student Name : {{$admission->name}}</h2>
                <h2>Class : {{$admission->standard[0]->accountclass->name}}</h2>
                <h2>Phone : {{$admission->phone}}</h2>
                <h2>Category : {{$admission->category}}</h2>
                <h2>Total Balance : {{$admission->total_balance}}</h2>
                <h2>Total Pending Balance : {{$admission->old_balance}}</h2>
                <h2>Paid Balance : {{$admission->balance_taken}}</h2>

            </div>
            Bills included :
            @foreach ($admissionChild as $item)
            {{$item->name}} : {{$item->balance}}
            @endforeach
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
