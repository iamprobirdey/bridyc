@include('student.layouts.loginRegister')

<footer>
    <div class="footclass mx-auto">
        <div class="d-flex flex-wrap justify-content-between">

          <div class="flexw mb-4">
            <h5>Legal</h5>
            <div class="d-flex flex-column">
                <a href="{{url('/privacy')}}">Privacy Policy</a>
                <a href="{{url('/terms')}}">Terms & Conditions</a>
            </div>
          </div>
  <br>
          <div class="flexw mb-4">
            <h5>Social</h5>
            <div class="listsocial d-flex flex-column">
                <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            </div>
          </div>
  <br>
          <div class="flexw mb-4">
            <h5>Partner</h5>
            <p>If you want to partner with us,
              call us at +91-9435285795/+91-9476844478</p>
          </div>

        </div>
    <br>
    <hr>
    <div class="comp">
      <div class="d-flex justify-content-center">
        <a href="#" class="mr-4" >About Us</a>
      <a href="{{url('contact')}}" class="mr-4">Contact Us</a>
        <p>A product by <a href="https://bucketbyte.com/" target="_blank">Bucket Byte</a></p>
      </div>
      <div class="d-flex justify-content-center">
        <p class="mr-1"><i class="fa fa-copyright" aria-hidden="true"></i> 2020 Bridyc.com |</p>
        <p>All rights reserved </p>
      </div>
    </div>
    </div>
  </footer>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  @yield('js_code')

  <script type="text/javascript">
    $(document).ready(function(){
    $(document).on("scroll", function(){
        if($(window).scrollTop()>60){
            $("nav").addClass("shrink");
            $(".navbar-brand img").attr('src', '/images/circle-bridyc.png')
            }
            else{
                $("nav").removeClass("shrink");
                $(".navbar-brand img").attr('src', '/images/bridyc white logo.png')
            }
        })
    });

    $('[data-toggle="slide-collapse"]').on('click', function() {
         $navMenuCont = $($(this).data('target'));
         $navMenuCont.animate({
         'width': 'toggle'
         }, 230);
   });
     $('.closemenu').on('click', function(){
      $navMenuCont.animate({
         'width': 'toggle'
         },0);
     })

    $(document).ready(function(){
        $("#lognsign, .newuser").click(function(){
        $("#mysignup").show();
        $("#mylogin").hide();

        });
    });
    $(document).ready(function(){
        $(".haveanaccount, .haveaccount").click(function(){
            $("#mylogin").show();
            $("#mysignup").hide();

        });
    });

    $(document).ready(function(){

      //getting the video source from data source in watch now button
        var $videourl;
        $('.playbtn').click(function(){
            $videourl= $(this).data("src");
        });

     //autoplay the video when the modal opens
        $('#podcastModal').on('shown.bs.modal', function(event){

          //don't show related videos
           $('#video').attr('src', $videourl + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

     //stop playing the video when the modal is closed
       $('#podcastModal').on('hide.bs.modal', function(event){
          $('#video').attr('src',$videourl);
       })
    });
  </script>


    <script src="{{url('js/loginSignupModal.js')}}"></script>

</body>
</html>
