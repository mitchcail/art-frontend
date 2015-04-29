(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(document).ready(function(){
      $('.slider').slider({full_width: true, height: 600, indicators: false, interval: 3000, transition: 3000});
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space