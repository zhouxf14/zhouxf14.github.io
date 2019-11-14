$(document).ready(function(){
	$("#topic2 .hide-btn").click(function() {
		$(".with-meaning").toggleClass("hidden");
		$(".without-meaning").toggleClass("hidden");
		if ($(".with-meaning").hasClass("hidden")) {
			$(this).text("Show");
		} else {
			$(this).text("Test");
		}
	});
});