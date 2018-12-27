  $(document).ready(function(){
  	$("#all").addClass("active");

  	$(".tag").click(function() {
  		// $(this).toggleClass("active");
  		// if(($(this).attr("id") != "all") && ($("#all").hasClass("active"))) {
  		// 	$("#all").removeClass("active");
  		// }

  		if($(this).attr("id") == "all") {
  			$(".single").removeClass("active");
  			$("#all").addClass("active");
  		} else {
  			// console.log("test");
  			$(this).toggleClass("active");
  			if(($("#all").hasClass("active"))) {
  				$("#all").removeClass("active");
  			} else {
  				if (!$(".single").hasClass("active")) {
  					$("#all").addClass("active");
  				}
  			}
  		}
  	});

  	$(".cv-btn").click(function() {
  		location.href = "Xiaofei_Zhou_CV.pdf";
  	});

  });