$(document).ready(function() {

	//to-top button
	var top_show = 900;
	var delay = 500;
	
  $(window).scroll(function () {
    if ($(this).scrollTop() > top_show) {
			$('#top').fadeIn();
		} else {
			$('#top').fadeOut();
		}//end if
  });//end scroll
	
  $('#top').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });//end click

});