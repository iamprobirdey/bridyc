@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/index.css')}}">
@endsection
@section('content')

<banner>
    <img class="imgban img-fluid" src="/images/banner2.png" alt="college students image">
     <div class="container focusplace"> 
        <div class="row">
        <div class="col-md-4">
                <img class="imgguest" src="/images/waariko.jpg" alt="guest photo">
              <div class="card mx-auto shadow podcastcard">
              <img class="imgguestcard" src="/images/waariko.jpg" alt="guest photo in card">
              <div class="card-body">
                <p>Guest: Waariko </p>
                <P>Working As: CEO, Nearbuy</p>
                <p>Topic of discussion: Startup and the world</p> 
              </div>
           </div>  
        </div>
        <div class="col-md-8 embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jCPqJVirnz8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
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
       <div class="col-lg-9 aboutdesc">
         <h4>Do your college Research here!</h4>
         <hr>
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

@endsection

@section('js_code')

    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/channel.js')}}"></script>

@endsection
