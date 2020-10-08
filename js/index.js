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
		window.open("Xiaofei_Zhou.pdf");
	});

  $(".google-scholar-btn").click(function() {
    window.open("https://scholar.google.com/citations?hl=en&user=OIL9gqgAAAAJ");
  });

});