// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation({
  offcanvas : {
    close_on_click : true
  }
});

$(document).foundation();




		// my code -- make menu fixed

var placeMenu = function(){
	var windowTop = ($(window).scrollTop());

	$('.side-nav, .menu-click .top-bar, middle-bar, bottom-bar').css({
		marginTop: windowTop
	});
};

// placeMenu();

// $(document).scroll(placeMenu);




// NAV MENU 

// modify for jumpiness in safari and in mobile devices. Clone hamburger bars 

$(function() {
	$(".right-off-canvas-toggle, .exit-off-canvas").click(function() {




    	$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");
		$('.menu-display').toggleClass("menu-visible")


		if ($(".menu-click").hasClass("menu-visible")){

			setTimeout(function(){
				$(".menu-click").removeClass("menu-visible")
			}, 500);

		}else{
			$('.menu-click').addClass("menu-visible");
		}	

		placeMenu();
		$(document).scroll(placeMenu);
			
  	});

});


$(function() {
	$(".side-nav a, .nav-soc a").click(function() {

		placeMenu();

    	$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");
		$('.menu-display').toggleClass("menu-visible")


		if ($(".menu-click").hasClass("menu-visible")){
			
			$(".menu-click").removeClass("menu-visible");

		}else{
			$('.menu-click').addClass("menu-visible");
		}				
  	});

});







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







// ABOUT STUFF ARROW


	$('.accordion-navigation a').click(function() {
		$(' .drop-down-arrow-right').toggleClass("drop-down-arrow-down");
	});


















