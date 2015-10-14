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






		// my code -- make menu fixed

var placeMenu = function(){
	var windowTop = ($(window).scrollTop());

	$('.side-nav, .top-bar, middle-bar, bottom-bar').css({
		marginTop: windowTop
	});
};

placeMenu();

$(document).scroll(placeMenu);







// WORK SECTION 
// PROJECT OVERLAYS



	$('.project-link').mouseenter(function(){

		var imageShown= $(this).find($('.project-image').filter(':visible'));


		$(this).find($('.image-overlay-content')).css({
			width: imageShown.width(),
			height: imageShown.height()
			});

		

		$(this).find($('.image-overlay-content')).fadeIn(150);

		$(this).find($('.project-title')).animate({
			marginTop:($(this).find($('.project-title')).parent().height()/2) - 
			($(this).find($('.project-title')).height()/2)}
			, 200);

	});

	$('.project-link').mouseleave(function(){
		$(this).find($('.image-overlay-content')).fadeOut(150);

		$(this).find($('.project-title')).animate({
			marginTop:($(this).find($('.project-title')).parent().height()/2) - 
			($(this).find($('.project-title')).height()/2) - 30}
			, 200);



	})























