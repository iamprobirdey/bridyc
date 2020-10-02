@extends('student.layouts.master')

@section('title','')
@section('desc','')
@section('keywords','')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/contact.css')}}">
@endsection
@section('content')
<div class="img-fluid imgbancontact about-faq-contact">
<div class="txtbanner"> 
          <h1>Do you have any queries?</h1>
         <p>We would love to answer them..</p>
        </div>
</div>

<div class="allheader container py-3 shadow">
<h2 class="text-uppercase mb-5 text-center">Contact Us</h2>
</div>
<div class="container-fluid mb-5">
    <div class="row contactform px-auto mx-2">
        <div class="col-md-5 mt-5 contactadd">
                <h6 class="text-center"><img src="/images/address.svg" alt="address marker"> Address</h6>
                <h6>Silpukhuri, Guwahati</h6>
                <h6>Assam 781003</h6>
                
                <hr class="my-4 w-75">
                
                <h6 class="text-center"><img src="/images/smartphone.svg" alt="cell phone"> Contact</h6>
                <h6>+91-9435285795</h6>
                <h6>+91-9476844478</h6>
                
                <h6>E-mail: info@bridyc.com</h6>
                <br>
                <h6 class="contact-line mx-lg-5">If you are an institute and want to onboard with us, please call/email us.</h6>
        </div>
    <br>
        <div class="col-md-7 mt-5  px-lg-5 py-5 contact-query">
        
        <h2 class="text-uppercase">let's talk</h2>
            <div id="contact-us" class="mx-5 mx-md-4 mx-lg-5">
                <contact-us></contact-us>
            </div>
          
        </div>
    </div>
    </div>
<br>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/contactus.js')}}"></script>

@endsection
