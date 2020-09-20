@extends('student.layouts.master')

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
          <a href="#" class="p-2 p-md-3">Read More</a>
        </div>
    </div>

     <div class="container focusplace">
        <div class="row">
        <div class="col-lg-4">
                <img class="imgguest shadow-lg" src="/images/waariko.jpg" alt="guest photo">
           </div>

        <div class="col-lg-8">
             <div class="videosection">
                <h2>"I was fascinated by avbshknvkn hssdlskd kemflemf kfldfl dfhkdhn dbdbs s hjasb hd"</h2>
                <div class="guest mx-auto mt-3">
                  <h2>Guest: Ankur Waariko</h2>
                  <h6>CEO at Nearbuy</h6>
                </div>
                <div class="d-flex justify-content-center mt-2">
                     10 August,2020  |  16 min  |  Season 1
                </div>
                <br>
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

    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/channel.js')}}"></script>

@endsection
