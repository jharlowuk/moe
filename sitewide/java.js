/* PRELOADER */
jQuery(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').slideUp('slow',function(){$(this).remove();});
});

});


/* Header animation */


$(window).scroll(function () {
    var sc = $(window).scrollTop()
	if($('.landscape').length == 0 ){
    	if (sc > -1) {
           $("#header-sroll").addClass("small")
   		} else {
           $("#header-sroll").removeClass("small")
    	}
	}
	else{
    	if (sc > 700) {
           $("#header-sroll").addClass("small")
   		} else {
           $("#header-sroll").removeClass("small")
    	}
	}
});



/* STELLAR */

$(function(){
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});
});

$.stellar({
  responsive: true
});
