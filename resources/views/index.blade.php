@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/index.css')}}">
@endsection
@section('content')

<banner>
    <img class="imgban img-fluid" src="/images/banner2.png" alt="college students image">
     <div class="container formcall">
       <h1>Need any assistance?</h1>
       <p>If you have any confusion, please request a call back. Our team will contact you at the earliest.</p>
       <hr>
       <form action="">
         <div class="input-group mb-2 inpg mx-auto">
           <div class="input-group-prepend">
             <span class="input-group-text material-icons">person</span>
           </div>
           <input type="text" class="form-control" placeholder="Full Name" id="usrname" name="fullname">
         </div>

         <div class="input-group mb-2 inpg mx-auto">
           <div class="input-group-prepend">
             <span class="input-group-text material-icons">call</span>
           </div>
           <input type="text" class="form-control" placeholder="Phone Number" id="usrcontact" name="contactnumber">
         </div>
         <textarea class="form-control mb-2 mx-auto" rows="3" id="comment"></textarea>
         <button type="submit" class="btn inpgbtn">Call Me</button>
       </form>
     </div>
   </banner>

    <div id="channel">
        <channel :channel="{{json_encode($channel)}}"></channel>
    </div>
   <br>
   <section>
     <div class="container-fluid">
     <div class="row aboutdiv mx-auto">
       <div class="col-lg-3">
         <img src="images/aboutimg.png" alt="girl sitting home" class="imgdes">
       </div>
       <div class="col-lg-9">
         <h4>Do your college Research here!</h4>
         <p>
           Bridyc helps students get admission in the school of their
           choice, we provide information to students and parents regarding the best
           courses, Graduation, Post-graduation and other education programmes available.
           We arrange meetings with the concerned college
           officials to ease up the college admission process.
       </p>
       </div>
     </div>
   </div>
   </section>
   <br>
   <br>

@endsection

@section('js_code')

    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/channel.js')}}"></script>

@endsection
