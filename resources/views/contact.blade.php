@extends('student.layouts.master')

@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and
activities and provide access to students and parents in particular, who are looking for
cross-training their minds before choosing an institute or a career. The platform will allow
students to share their learnings, learn from their peers and from the people who have already
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance in Assam,
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school, career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career video')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/contact.css')}}">
@endsection
@section('content')

<style>
    .mt10 {
        margin-top: 10rem;
    }

    .mt5 {
        margin-top: 5rem;
    }

    .mt4 {
        margin-top: 4rem;
    }

    .mt2 {
        margin-top: 2rem;
    }

    ::placeholder {
        color: #C6D9DF !important;
    }
</style>
<div class="row  justify-content-center mx-auto mt5 font-weight-bold">
    <div class="col-md-4 text-left ">
        <div class="justify-content-end  text-justify">
            <h2 class="mt4">Get in touch</h2>
            <div class="">
                Fill up the form and our Team will get back
                to you within 24 hours.
            </div>
            <div class="mt-4 mb-2 mt5">
                <div class="d-flex align-items-center flex-row">
                    <div class="p-2"><i class="fa fa-phone" aria-hidden="true"></i></div>
                    <div class="p-2">
                        <a href="tel:+91-9365441646">+91-9365441646</a>
                        <br>
                        <a href="tel:+91-9476844478">+91-9476844478</a>
                    </div>
                </div>
                <div class="d-flex align-items-center flex-row">
                    <div class="p-2"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div class="p-2 ml-1">
                        <a href="mailto:info@bridyc.com">info@bridyc.com</a>
                    </div>
                </div>
                <div class="d-flex align-items-center flex-row">
                    <div class="p-2"><i class="fa fa-map-o" aria-hidden="true"></i></div>
                    <div class="p-2 ml-1">
                        Silpukhuri, Guwahati<br>
                        Assam 781003
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-5 mt4 text-left">
        <div id="contact-us" class="shadow-sm justify-content-end card-body text-white" style="background-color: #02044A; border-radius: 6px;">
            <contact-us class="m-2"></contact-us>
        </div>
    </div>
</div>
@endsection
@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/contactus.js')}}"></script>
@endsection