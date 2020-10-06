$(document).ready(function(){
  $("#all").addClass("active");

	$(".tag").click(function() {
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".tag").removeClass("active");
      $(this).addClass("active");
    }
	});

	$(".cv-btn").click(function() {
		location.href = "Xiaofei_Zhou.pdf";
	});

  $(".google-scholar-btn").click(function() {
    location.href = "https://scholar.google.com/citations?hl=en&user=OIL9gqgAAAAJ";
  });

});