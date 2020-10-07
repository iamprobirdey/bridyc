@extends('student.layouts.master')

@section('title','')
@section('desc','')
@section('keywords','')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/faq.css')}}">
@endsection
@section('content')
<div class="img-fluid imgbanfaq about-faq-contact">
<div class="txtbanner">
          <h1>Frequently asked questions</h1>
         <p>We are happy to help you..</p>
        </div>
</div>
<div class="allheader container py-3 shadow">
<h2 class=" text-uppercase mb-5 text-center">FAQ and Answers</h2>
</div>
<div class="row mx-lg-5 faqbody mx-0">
   <div class="col-sm-4 px-lg-5">
     <div class="definition px-2 px-lg-4 py-5">
   <p>Bridyc is a bi-directional platform. It is dedicated to empower young minds with the real life exposure and activities
   who are looking for cross-training their minds before choosing an institute or a career.</p>
   <p>For the institutes, it is a place to digitalise there operational needs and do lot more.</p>
   </div>
</div>
<div class="col-sm-8 container-fluid  w-lg-75 px-lg-5">
      
      <button class="accordion px-2 px-lg-5">Is sign up mandatory to use bridyc.com? </button>
      <div class="panel px-4 py-4">
       No.
      <p>But you can do a lot more when you are registered.</p>
      </div>

       <br> 

       <button class="accordion px-2 px-lg-5">Is it just another institute listing site?</button>
       <div class="panel px-4 py-4">
         No.
        <p>As a student, you can do a lot more than just research.</p>
        <p>As an institute, you will be provided with separate channels.</p>
       </div>
       
       <br>

       <button class="accordion px-2 px-lg-5">Is it just another school management software? </button>
       <div class="panel px-4 py-4">
         No.
        <p>It is much more than that. To know more, please contact us.</p>
       </div>

       <br>

       <button class="accordion px-2 px-lg-5">As a student, what is my benefit?</button>
       <div class="panel px-4 py-4">
        <p>As a student, you will be able to get your doubts cleared. Be it career oriented or any subject related, you
        will always be able to hangout with or learn from your peers or experts or even share your learnings to others.</p>
       <p>We also host podcast with people who have already crossed your paths. Do watch them here.</P>
       </div>

      <br>

      <button class="accordion px-2 px-lg-5">As an institute, what is my benefit? </button>
      <div class="panel px-4 py-4">
      <p>As an institute, you will have a digital footprint with complete control over your channel.
      Bridyc helps you in daily task management and cost optimization in your end. To know more please contact us.</p>
      </div>

    </div>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

    <script type="text/javascript">
     
      var acc = document.getElementsByClassName("accordion");
      var i;
      for(i = 0; i <acc.length; i++){
        acc[i].addEventListener("click", function(){
          this.classList.toggle("active");

          var panel = this.nextElementSibling;
          if(panel.style.display === "block"){
            panel.style.display = "none";
          }
          else{
            panel.style.display = "block";
          }
        });
      }
    </script>

@endsection
