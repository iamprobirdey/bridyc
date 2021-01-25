@extends('student.layouts.master')

@section('title', 'Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc', 'BRIDYC is dedicated to empower young minds with the real life exposure and
activities and provide access to students and parents in particular, who are looking for
cross-training their minds before choosing an institute or a career. The platform will allow
students to share their learnings, learn from their peers and from the people who have already
crossed those paths')
@section('keywords', 'Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career
guidance in Assam,
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school,
career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website
link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for
students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career
video')

@section('s_url', url('/'))
@section('s_type', '')
@section('s_title', 'Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('s_desc', 'BRIDYC is dedicated to empower young minds with the real life exposure and
activities and provide access to students and parents in particular, who are looking for
cross-training their minds before choosing an institute or a career. The platform will allow
students to share their learnings, learn from their peers and from the people who have already
crossed those paths')
@section('s_img', url('/storage/menu-banners/May2018/0CP0rMbxhKP915c7z6Fp.jpg'))

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/index.css')}}">
@endsection
@section('content')

<banner>

    <div class="img-fluid imgban">
        <div class="txtbanner">
            <h1>Exposure to the realities of the world is very important</h1>
            <p class="sitevalue">Learn | Share | Engage | Find Institute</p>
            <p>And we charge you <strong>Nothing</strong></p>
            <br>
            <a href="{{route('about')}}" class="p-2 p-md-3">Read More</a>
        </div>
    </div>
    <div class="container focusplace">
        <div class="row">
            @if ($podcast != null)

            <div class="col-lg-4">
                <img class="imgguest shadow-lg" src="{{asset('podcast/'.$podcast->image_path)}}" alt="guest photo">
            </div>
            <div class="col-lg-8">
                <div class="videosection">
                    <h2>"{{$podcast->thumbnail}}"</h2>
                    <div class="guest mx-auto mt-3">
                        <h2>Guest: {{$podcast['name']}}</h2>
                        <h6>{{$podcast->designation}}</h6>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        {{$podcast->created_at->diffForHumans()}} | Season 1
                    </div>
                    <br>
                    <p>
                        {{$podcast->summary}}
                    </p>

                    <button class="btn playbtn" data-toggle="modal" data-src="{{$podcast->youtube_link}}"
                        data-target="#podcastModal"><img src="/images/play.svg"> Watch Now</button>
                </div>
            </div>
            @endif
        </div>
    </div>
</banner>

<div class="modal fade" id="podcastModal">
    <div class="modal-dialog poddialog">
        <div class="modal-content">
            <div class="modal-body podbody">
                <button type="button" class="close closevideo" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                        allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<br>
<section>
    <div class="container-fluid">
        <div class="aboutdesc mx-auto">
            <h4>SCHOOLS AND COLLEGES</h4>

            <p>
                Look out for the right institute for you or your kids. Visit the institute you like
                and find out more about them.
            </p>
        </div>
    </div>
</section>


<div id="channel">
    <channel :channel="{{json_encode($channel)}}"></channel>
</div>

@endsection

@section('js_code')

<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js"></script>

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/firebase-messaging-sw.js')}}"></script>
<script src="{{url('js/channel.js')}}"></script>

@endsection
