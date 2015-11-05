$(document).ready(function(){


////////////magellan//////////////////////


// fixing the jumpiness


// console.log(parseInt($('#magellan-bar p').css('margin-top')));


// console.log(parseInt($('#magellan-bar p').css('line-height')));






var magellanPosition = $('#magellan-bar').offset().top + (Math.tan(0.0872665)* $(window).width())  +  (parseInt($('#magellan-bar p').css('line-height')));
	$window= $(window);


var headMarginEqualizer =  parseInt($('.section-title').css('margin-top')) + (0- parseInt($('#magellan-bar').css('margin-top'))) + "px";
console.log(headMarginEqualizer);





$window.scroll(function(){
	if ($(window).scrollTop() >= magellanPosition) {
		$("div#magellan-bar").addClass("fixed");
		// $("div#magellan-bar").css({
		// 	"background-color": "rgb(0%, 0%, 0%, 0.75)",
		// 	"color": "white",

		// })


		$("h2.section-title").css("margin-top", headMarginEqualizer);



	} else {
		$("div#magellan-bar").removeClass("fixed");
		
	}
});



////////hover expand///////////

$('.solutions-detail img').mouseenter(function(){

	$('#hover-expand').fadeIn();
	
});


$('.solutions-detail img').mouseleave(function(){

	$('#hover-expand').fadeOut();
	
});








});




