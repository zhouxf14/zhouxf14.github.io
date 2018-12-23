(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	menuWidth: 140,
    });
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel.carousel-with-indicators').carousel({fullWidth: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space