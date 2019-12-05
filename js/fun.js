$(document).ready(function(){

	var dict = new Object();
	dict = {
		"wo": "I, me",
		"ni": "you (single)",
		"ni men": "you(plural)",
		"ta": "he/she, him/her",
		"ta men": "they, them",
		"xie": "write",
		"chi": "eat",
		"he": "drink",
		"kan": "watch",
		"dai ma": "code",
		"zuo ye": "assignment, schoolwork",
		"xiao shuo": "novel (noun)",
		"ping guo": "apple",
		"xiang jiao": "banana",
		"kao rou": "roast meat, barbecue",
		"mi fan": "rice",
		"ke le": "cola",
		"wan fan": "dinner",
		"pi jiu": "beer",
		"dian ying": "movie",
		"ji wei jiu": "cocktail",
		"tang": "soup",
		"huo guo": "hotpot",
		"xin": "letter, mail",
		"ri ji": "diary"
	};

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
		var category = id.substring(0, id.length-1);
		var target = $("#"+category);
		var word = $(this).text();
		chinese_word = word.substring(0, word.indexOf('('));
		lower = word.toLowerCase();
		pinyin = lower.substring(0, lower.indexOf(','));
		console.log(pinyin);
		var translate = dict[pinyin];
		// console.log(translate);
		target.attr("data-tooltip", translate);
		// console.log(target.attr("data-tooltip"));
		target.text(chinese_word);

	})
});