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
<style>
    .customMT{
        margin-top: 6rem;
    }
    .noneTextD {
        text-decoration: none !important;
    }

    .customBgcolor {
        background-image: linear-gradient(90deg, #FFEDE9 0%, #FFF7F5 100%);
        border-radius: 6px;
    }

    .customBgcolor1 {
        background-color: #73E4B0;
        background-image: linear-gradient(90deg, #9EEBC7 0%, #DDF9EB 100%);
        border-radius: 6px;
    }

    .customBgcolor2 {
        background-color: #D9AFD9;
        background-image: linear-gradient(90deg, #E5DCFF 0%, #F3EFFF 100%);
        border-radius: 6px;
    }
</style>
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
                <div class="row justify-content-center noneTextD">
                    <div class="col-sm-3 m-1 customBgcolor" style="height: 200px;">
                        <div class="d-flex justify-content-between mt-4">
                            <a href="{{route('channel.accountant.ledger',$channelTitle)}}" class="h5">Create Ledger</a>
                            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="d-flex justify-content-between customMT">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add new</button>
                            <button type="button" class="btn btn-sm btn-primary">View</button>
                        </div>
                    </div>
                    <div class="col-sm-3 m-1 customBgcolor1" style="height: 200px;">
                        <div class="d-flex justify-content-between mt-4">
                            <a href="{{route('channel.accountant.cashbook',$channelTitle)}}" class="h5">Cashbook</a>
                            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="d-flex justify-content-between mb-2 customMT" >
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add new</button>
                            <button type="button" class="btn btn-sm btn-primary">View</button>
                        </div>
                    </div>
                    <div class="col-sm-3 m-1 customBgcolor2" style="height: 200px;">
                        <div class="d-flex justify-content-between mt-4">
                            <a href="{{route('channel.accountant.admission',$channelTitle)}}" class="h5">Admission</a>
                            <svg xmlns="http://www.w3.org/2000/svg" style="height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="d-flex justify-content-between mb-2 customMT">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add new</button>
                            <button type="button" class="btn btn-sm btn-primary">View</button>
                        </div>
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