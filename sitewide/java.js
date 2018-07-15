/* PRELOADER */
jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').slideUp('slow',function(){$(this).remove();});
});

});

/* Menu animation */

// Off Canvas Menu Open & Close
    $('#offCanvas').on('click', function () {
        $('.nav-offcanvas').addClass('open');
        $('.offcanvas-overlay').addClass('on');
    });
    $('#offCanvasClose, .offcanvas-overlay').on('click', function () {
        $('.nav-offcanvas').removeClass('open');
        $('.offcanvas-overlay').removeClass('on');
    });
    


/* STELLAR */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 parallaxElements: true,
}else
{
$(function(){
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});
});

$.stellar({
  responsive: true
});
}

