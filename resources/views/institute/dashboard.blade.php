@extends('layouts.master')


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
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('content')
<div class="container-fluid">
    <div class="row">
        @include('layouts.sidebar')
        <main role="main" class="col-lg-10 ml-lg-auto">
            <br>
            <br>
            <div id="quote_and_time">
                <quote-and-time :date="{{json_encode($date)}}"></quote-and-time>
            </div>
        </main>
    </div>
</div>
@endsection
@section('model')

@endsection

@section('js_code')
<script src="{{url('js/dashboardBlade.js')}}"></script>
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboard.js')}}"></script>
@endsection
























@section('js_code')
<script>
    // Add the following code if you want the name of the file appear on select
    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
</script>

<script>
    $(document).ready(function(){
    $("#carouid").carousel({
      interval : false
    });
  });
</script>

<script>
    $('.imgpreview').on('click',  function() {
    $('#imgmain').prop('src', this.src);
});
</script>

<script>
    $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    html: true,
    content: function() {
      return $('#popover-content').html();
    }
  });
  });
</script>

@endsection
