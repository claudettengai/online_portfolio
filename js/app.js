// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();





// NAV MENU 

$(function() {
	$(".right-off-canvas-toggle, .exit-off-canvas").click(function() {
    	$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");
  	});
});

