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








// WORK SECTION 
// PROJECT OVERLAYS



	$('.project-link').mouseenter(function(){

		$(this).find($('.image-overlay-content')).css({
			width: $(this).find($('.project-image')).width(),
			height: $(this).find($('.project-image')).height()
			});

		// $(this).find($('.project-title')).css({
		// 	marginTop: ($(this).find($('.project-title')).parent().height()/2) - 
		// 	($(this).find($('.project-title')).height()/2) -40 
		// });


		$(this).find($('.image-overlay-content')).fadeIn(200);

		$(this).find($('.project-title')).animate({
			marginTop:($(this).find($('.project-title')).parent().height()/2) - 
			($(this).find($('.project-title')).height()/2)}
			, 150);

	});

	$('.project-link').mouseleave(function(){
		$(this).find($('.image-overlay-content')).fadeOut(200);

		$(this).find($('.project-title')).animate({
			marginTop:($(this).find($('.project-title')).parent().height()/2) - 
			($(this).find($('.project-title')).height()/2) - 30}
			, 150);



	})























