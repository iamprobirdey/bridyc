@extends('student.layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/index.css')}}">
@endsection
@section('content')

<banner>
    <!--img class="imgban img-fluid" src="/images/banner2.png" alt="college students image"-->

    <div class="imgban img-fluid">
        <div class="txtbanner">
          <h1>Exposure to the realities of the world is very important</h1>
          <p class="sitevalue">Learn | Share | Engage | Find Institute</p>
          <p>And we charge you <strong>Nothing</strong></p>
          <br>
          <a href="#">Read More</a>
        </div>
    </div>

     <div class="container focusplace"> 
        <div class="row">
        <div class="col-md-4">
                <img class="imgguest shadow-lg" src="/images/waariko.jpg" alt="guest photo">    
           </div>  
        
        <div class="col-md-8">
             <div class="videosection">
                <h2>"I was fascinated by avbshknvkn hssdlskd kemflemf kfldfl dfhkdhn dbdbs s hjasb hd"</h2>
                <div class="guest mx-auto mt-3">
                  <h2>Guest: Ankur Waariko</h2> 
                  <h6>CEO at Nearbuy</h6>
                </div>
                <div class="dateheader d-flex justify-content-center mt-2">
                     10 August,2020  |  16 min  |  Season 1
                </div>
                <br>
                <p>Topic of discussion: Startup and the world</p>
                <p>A paragraph of Summary of what the discussion is like. This helps students to choose whether to watch it or nor. 
                  Making it easier for them to decide
                </p>
     
                <button class="btn playbtn" data-toggle="modal" data-src="https://www.youtube.com/embed/jCPqJVirnz8" data-target="#podcastModal"><img src="/images/play.svg"> Watch Now</button>
             </div>
        </div>
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
                           <iframe class="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                      </div>
                 </div>
            </div>
       </div>
   </div> 



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
         <h4>Find your institute here!</h4>
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
