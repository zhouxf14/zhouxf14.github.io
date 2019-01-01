$(document).ready(function(){

  $(".cv-btn").click(function() {
    location.href = "Xiaofei_Zhou_CV.pdf";
  });

  $(".collapse").click(function() {
    $("#slide-out").toggleClass("hidden");
    $(this).toggleClass("hidden");
  });

  $(".main-page").click(function() {
    if(!$("#slide-out").hasClass("hidden")) {
      $("#slide-out").addClass("hidden");
      $(".collapse").removeClass("hidden");
    }
  });

});