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
            @php
            $channelTitle = auth()->user()->channel->title;
            @endphp
            <div class="container">
                <h1>Accountant</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <a href="{{route('channel.accountant.ledger',$channelTitle)}}"
                            class="badge badge-primary">Create Ledger</a>
                    </div>
                    <div class="col-sm-4">
                        <a href="{{route('channel.accountant.cashbook',$channelTitle)}}"
                            class="badge badge-primary">Cashbook</a>
                    </div>
                    <div class="col-sm-4">
                        <a href="{{route('channel.accountant.admission',$channelTitle)}}"
                            class="badge badge-primary">Admission</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
