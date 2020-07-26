@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/faq.css')}}">
@endsection
@section('content')
<div class="container faqbody">
    <h2 class="faqheader">FAQ & Answers</h2>
<br>
<div id="accordion">
  <div class="card">
    <div class="card-header faqQ">
      <a class="card-link" data-toggle="collapse" href="#faq1">
        What is bridYC? <i class="fa fa-angle-up float-right" aria-hidden="true"></i>
      </a>
    </div>
    <div id="faq1" class="collapse show" data-parent="#accordion">
      <div class="card-body">
        bridYC is an education hub where students/parents can do proper research about different schools/colleges/kindergarten aided by reviews and complete the admission process online.
      </div>
    </div>
  </div>
  <br>
  <div class="card">
    <div class="card-header faqQ">
      <a class="card-link" data-toggle="collapse" href="#faq2">
        Is it just another institute listing site? <i class="fa fa-angle-down float-right" aria-hidden="true"></i>
      </a>
    </div>
    <div id="faq2" class="collapse" data-parent="#accordion">
      <div class="card-body">
        No.
        <p>As a student, you can do a lot more than just research.</p>
        <p>As an institute, you will be provided with separate channels.</p>
      </div>
    </div>
  </div>

  <br>
  <div class="card">
    <div class="card-header faqQ">
      <a class="card-link" data-toggle="collapse" href="#faq3">
        Is sign up mandatory to use bridyc.com? <i class="fa fa-angle-down float-right" aria-hidden="true"></i>
      </a>
    </div>
    <div id="faq3" class="collapse" data-parent="#accordion">
      <div class="card-body">
        No.
        <p>But you can do a lot more when you are registered.</p>
      </div>
    </div>
  </div>
</div>
</div>


@endsection

@section('js_code')

    <script src="{{url('js/app.js')}}"></script>

@endsection

