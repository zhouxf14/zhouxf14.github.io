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
  		location.href = "Xiaofei_Zhou_CV.pdf";
  	});

  });