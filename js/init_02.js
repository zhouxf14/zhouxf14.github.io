(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 140,
    });
    $('.scrollspy').scrollSpy({
      scrollOffset: 0,
    });
    $('.parallax').parallax();
    $('.carousel').carousel();
      $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
    $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space