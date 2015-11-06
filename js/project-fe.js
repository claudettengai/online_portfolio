$(document).ready(function(){


////////////magellan//////////////////////


// fixing the jumpiness


// console.log(parseInt($('#magellan-bar p').css('margin-top')));


// console.log(parseInt($('#magellan-bar p').css('line-height')));


// $('#magellan-bar').css({"margin-top": - ($(window).height() * 0.08)});
// console.log('hello');

var heroBottom = $('#FE-head-back').position().top+$('#FE').outerHeight(true)


var magellanPositionScroll = $('#magellan-bar').offset().top + (Math.tan(0.0698132)* $(window).width()) + 16;
	$window= $(window);

console.log($('#magellan-bar').offset().top);


// var headMarginEqualizer =  parseInt($('.after-fixed-nav').css('margin-top')) + (0- parseInt($('#magellan-bar').css('margin-top'))) + "px";
// console.log(headMarginEqualizer);

var headMarginInit = $("h2.after-fixed-nav").css("margin-top");

var headMarginEqualizer = parseInt($("div#magellan-bar").outerHeight(true))+ parseInt($("h2.after-fixed-nav").css("margin-top")) + "px";
// console.log(headMarginEqualizer);

$window.scroll(function(){
	if ($(window).scrollTop() >= magellanPositionScroll) {
		$("#magellan-bar").addClass("fixed");
		// $("div#magellan-bar").css({
		// 	"background-color": "rgba(0, 0, 0, 0.8)",
		// });

		$("h2.after-fixed-nav").css("margin-top", headMarginEqualizer);



	} else {
		$("div#magellan-bar").removeClass("fixed");
		$("h2.after-fixed-nav").css("margin-top", headMarginInit);

		
	}
});


// $(document).foundation({
// "magellan-expedition": {
  
//   threshold: 400, // how many pixels until the magellan bar sticks, 0 = auto
//   offset_by_height : false,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
//    destination_threshold : 400, // pixels from the top of destination for it to be considered active
//    fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll

// }
// });

console.log("hello");











////////hover expand///////////

$('.solutions-detail img').mouseenter(function(){

	$('#hover-expand').fadeIn();
	
});


$('.solutions-detail img').mouseleave(function(){

	$('#hover-expand').fadeOut();
	
});








});




