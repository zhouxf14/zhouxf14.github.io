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
		window.open("https://docs.google.com/document/d/1JoEGiCnP4vcB4v4GTIIZAp1g6YRYNkR8Yxdu0kDRYwQ/edit?usp=sharing");
	});

  $(".google-scholar-btn").click(function() {
    window.open("https://scholar.google.com/citations?hl=en&user=OIL9gqgAAAAJ");
  });
  $(".post-btn").click(function() {
    window.open("https://xiaofei7.notion.site/e09e6db52d96418ba26e0037b61dd34c");
  });

});