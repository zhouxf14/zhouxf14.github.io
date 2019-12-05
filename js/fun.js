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

	$(".word-bank .word-item").click(function() {
		// alert("Test");
		var id = $(this).parent(".word-bank").attr('id');
		var word = $(this).text();
		word = word.substring(0, word.indexOf('('));
		var category = id.substring(0, id.length-1);
		$("#"+category).text(word);

	})
});