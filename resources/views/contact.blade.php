@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/contact.css')}}">
@endsection
@section('content')

<h2 class="contactheader container-fluid">Contact Us</h2>
<div class="container-fluid mb-5">
    <div class="row contactform px-auto">
        <div class="col-md-5 mt-5 contactadd">
                <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h4>
                <h5>Silpukhuri, Guwahati</h5>
                <h5>Assam 781003</h5>
                <br>
                <h4><i class="fa fa-phone-square" aria-hidden="true"></i> Contact</h4>
                <h5>+91-9435285795</h5>
                <h5>+91-9476844478</h5>
                <br>
                <h5 class="mx-5">If you are an institute and want to onboard with us, please call us.</h5>
        </div>
    <br>
        <div class="col-md-7 mt-5 px-5">
            <h2>Send us your queries</h2>
            <div id="contact-us">
                <contact-us></contact-us>
            </div>
        </div>
    </div>
    </div>

@endsection

@section('js_code')

    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/contactus.js')}}"></script>

@endsection

