  $(document).ready(function(){
    $('.scrollspy').scrollSpy({
    	scrollOffset: 0
    });
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.slider').slider({
    	indicators: false,
    	// height: 490,
        height: 450,
    	interval: 5000
    });

    $(document).ready(function(){
        $('.materialboxed').materialbox();
    });
    
  });