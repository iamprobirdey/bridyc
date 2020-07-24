@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/contact.css')}}">
@endsection
@section('content')


<div class="container-fluid mt-5 ">
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
            <h2>Get in touch</h2>
            <form action="" class="">
                <input type="text" class="form-control shadow-none" placeholder="Name *" required>
                <br>
                <input class="form-control shadow-none" placeholder="Email *" required>
                <br>
                <textarea class="form-control" rows="5" id="msg" placeholder="Message *" required></textarea>
                <br>
                <button type="submit" class="btn btnlognsign">Send</button>
          </form>
        </div>
    </div>
    </div>

@endsection
