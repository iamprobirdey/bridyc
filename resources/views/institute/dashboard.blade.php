@extends('layouts.master')


@section('title','')
@section('desc','')
@section('keywords','')


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
