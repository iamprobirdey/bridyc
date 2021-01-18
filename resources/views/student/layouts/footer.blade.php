{{-- @include('student.layouts.loginRegister') --}}

<footer>
    <div class="footer-class text-center mt-5 py-5">
        <div class="row mx-0">

            <div class="col-sm-4 mb-4">
                <h5>Legal</h5>
                <div class="d-flex flex-column">
                    <a href="{{url('/privacy')}}">Privacy Policy</a>
                    <a href="{{url('/terms')}}">Terms & Conditions</a>
                </div>
            </div>
            <br>
            <div class="col-sm-4 mb-4">
                <h5>Social</h5>
                <div class="listsocial d-flex flex-column">
                    <a target="_blank" href="https://www.facebook.com/bridyc"><i class="fa fa-facebook-official"
                            aria-hidden="true"></i></a>
                    <a target="_blank" href="https://www.instagram.com/bridyc_official/?hl=en"><i
                            class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCMNZ_Y-eBM1rteVfLMqHH7A"><i
                            class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
            </div>
            <br>
            <div class="col-sm-4 mb-4">
                <h5>Partner</h5>
                <p>If you are an institute and wants to partner with us,
                    call/email us at:
                    <ul class="listsocial mt-n3">
                        <li class="ml-n5">+91-9365441646</li>
                        <li class="ml-n5">+91-9476844478</li>
                        <li class="ml-n5">E-mail: info@bridyc.com</li>
                    </ul>
                </p>
            </div>

        </div>
        <br>
        <hr>
        <div class="mt-n3">
            <div class="d-flex justify-content-center">
                <a href="{{route('about')}}" class="mr-4">About Us</a>
                <a href="{{url('contact')}}" class="mr-4">Contact Us</a>
                <p>A product by <a href="https://bucketbyte.com/" target="_blank">Bucket Byte</a></p>
            </div>
            <div class="d-flex justify-content-center">
                <p class="mr-1"><i class="fa fa-copyright" aria-hidden="true"></i> 2020 bridyc.com |</p>
                <p>All rights reserved </p>
            </div>
        </div>
    </div>

    <a href="https://api.whatsapp.com/send?phone=919365441646&text=" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"></script>



@yield('js_code')

<script type="text/javascript">
    $(document).ready(function(){
    $(document).on("scroll", function(){
        if($(window).scrollTop()>60){
            $("nav").addClass("shrink");
            }
            else{
                $("nav").removeClass("shrink");
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


{{-- <script src="{{url('js/loginSignupModal.js')}}"></script> --}}

</body>

</html>
