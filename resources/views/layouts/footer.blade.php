<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"></script>
@yield('js_code')


<script>
    $('[data-toggle="slide-collapse"]').on('click', function() {
         $navMenuCont = $($(this).data('target'));
         $navMenuCont.animate({
         'width': 'toggle'
         }, 230);
   });
</script>
<script>
    $(".left-sidebar .nav li").on("click", function() {
    $("left-sidebar .nav li").removeClass("active");
    $(this).addClass("active");
  });
</script>
</body>

</html>
