$(document).ready(function(){

  $(".cv-btn").click(function() {
    location.href = "../Xiaofei_Zhou_UX.pdf";
  });

  $(".collapse").click(function() {
    $("#slide-out").toggleClass("hidden");
    $(".icons").toggleClass("hidden");
  });

  $(".main-page").click(function() {
    if(!$("#slide-out").hasClass("hidden")) {
      $("#slide-out").addClass("hidden");
      $(".icons").removeClass("hidden");
    }
  });

  $(document).ready(function(){
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true      
    });
  });

});