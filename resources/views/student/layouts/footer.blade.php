@include('student.layouts.loginRegister')

<footer>
    <div class="footclass mx-auto">
        <div class="d-flex flex-wrap justify-content-between">

          <div class="flexw mb-4">
            <h4>Legal</h4>
            <div class="d-flex flex-column">
                <a href="{{url('/privacy')}}">Privacy Policy</a>
                <a href="{{url('/terms')}}">Terms & Conditions</a>
            </div>
          </div>
  <br>
          <div class="flexw mb-4">
            <h4>Social</h4>
            <div class="listsocial d-flex flex-column">
                <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            </div>
          </div>
  <br>
          <div class="flexw mb-4">
            <h4>Partner</h4>
            <p>If you want to partner with us,
              call us at +91-9435285795/+91-9476844478</p>
          </div>

        </div>
    <br>
    <hr>
    <div class="comp">
      <div class="d-flex justify-content-center">
        <a href="#" class="mr-4" >About Us</a>
        <a href="#" class="mr-4">Contact Us</a>
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
        if($(window).scrollTop()>220){
            $("nav").addClass("shrink");
            }
            else{
                $("nav").removeClass("shrink");
            }
        })
    });
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
  </script>


    <script src="{{url('js/loginSignupModal.js')}}"></script>

</body>
</html>
