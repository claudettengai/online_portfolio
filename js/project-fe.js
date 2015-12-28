$(document).ready(function(){




// degrees to radians function	

Math.degrees = function(rad)
 {
 return rad*(180/Math.PI);
 }
 
Math.radians = function(deg)
 {
 return deg * (Math.PI/180);
 }

// var angle_in_deg = Math.degrees(3.14);
// var angle_in_rad = Math.radians(180);






////////////magellan//////////////////////

$(document).foundation({

"magellan-expedition": {
 
  destination_threshold: 350, // pixels from the top of destination for it to be considered active
   
}



});






// fixing the jumpiness


// console.log(parseInt($('#magellan-bar p').css('margin-top')));
// console.log(parseInt($('#magellan-bar p').css('line-height')));
// $('#magellan-bar').css({"margin-top": - ($(window).height() * 0.08)});
// console.log('hello');

var heroBottom = $('#FE-head-back').position().top+$('#FE').outerHeight(true)


var magellanPositionScroll = $('#magellan-bar').offset().top + (Math.tan(Math.radians(4))* $(window).width()) + 16;
	$window= $(window);

// console.log($('#magellan-bar').offset().top);


// var headMarginEqualizer =  parseInt($('.after-fixed-nav').css('margin-top')) + (0- parseInt($('#magellan-bar').css('margin-top'))) + "px";
// console.log(headMarginEqualizer);

var headMarginInit = $("h2.after-fixed-nav").css("margin-top");
var headMarginInitTitle = $("h1.after-fixed-nav").css("margin-top");


var headMarginEqualizer = parseInt($("div#magellan-bar").outerHeight(true))+ parseInt($("h2.after-fixed-nav").css("margin-top")) + "px";
// console.log(headMarginEqualizer);
var headMarginEqualizerTitle = parseInt($("div#magellan-bar").outerHeight(true))+ parseInt($("h1.after-fixed-nav").css("margin-top")) + "px";
// console.log(headMarginEqualizer);

$window.scroll(function(){
	if ($(window).scrollTop() >= magellanPositionScroll) {
		$("#magellan-bar").addClass("fixed");
		// $("div#magellan-bar").css({
		// 	"background-color": "#C8F526",
		// });

		$("h2.after-fixed-nav").css("margin-top", headMarginEqualizer);
		$("h1.after-fixed-nav").css("margin-top", headMarginEqualizerTitle);




	} else {
		$("div#magellan-bar").removeClass("fixed");
		$("h2.after-fixed-nav").css("margin-top", headMarginInit);
		$("h1.after-fixed-nav").css("margin-top", headMarginInitTitle);


		
	}
});







//////////////////SOLUTION SECTION-1 /////////////////////
////centering text vertically////////



function sideTextAlign(){

	$(".sol-text").each(function(){
		
		if ($(window).width() >= 1024){

			var sidePicHeight= $(this).parent().find($(".side-img-block")).height();
			var sideTextHeight= $(this).height();

			if ($(this).hasClass("sol-text-higher")){
				var sideTextMarginTop = sidePicHeight/2 - sideTextHeight/2 -60;
			}else{
				var sideTextMarginTop= sidePicHeight/2 - sideTextHeight/2;
			}
			
		
			// console.log(sideTextMarginTop);

			$(this).css("margin-top", sideTextMarginTop);			

		} else {
			$(this).css("margin-top", 0);
		}


	});

}


sideTextAlign();

$(window).resize(sideTextAlign);






function arrowAlign(){
	$(".arrow").each(function(){
		
		var arrowImgs = $(this).parent().find($("img"));

		var titleHeight= $(this).parent().find($(".sol-img-title")).height() + $(this).parent().find($(".sub-titles")).height();

		var highest = arrowImgs[0].height;
		for (i= 0; i < arrowImgs.length; i++ ){
			if(arrowImgs[i].height > highest) { 
				highest = arrowImgs[i].height; 
			} else{
				shortest= arrowImgs[i].height;
			}
		}

		// arrowImgs.each(function(i, img) {
		// 	if (img.height > highest) { highest = img.height; };
		// });

		arrowMarginTop= shortest/2 - $(".arrow").height()/2 + titleHeight; 


		$(this).css("margin-top", arrowMarginTop);


	});

	// var arrowMarginTop= $(".side-image-block img").height()/2 - $(".arrow").height()/2;
	// $(".arrow").css("margin-top", arrowMarginTop);
}

arrowAlign();
$(window).resize(arrowAlign);


















///////////////////////BACKGROUND PICTURE SKEW/////////////////////////



// function skewAdjust(){

// 	var imgSkewAdjust = $('#fe-pic1').offset().top- $('.image-clip').offset().top;
// 	$(".image-clip").css("margin-top", -imgSkewAdjust);
// };


// skewAdjust();

// $(window).resize(function(){
// 	console.log(imgSkewAdjust);
// });



function skewTriangles(){
	var triangleTopHeight = Math.tan(Math.radians(4)) * $(window).width();
	$('.image-clip-before, .image-clip-after').css("height", triangleTopHeight);
}

skewTriangles();

$(window).resize(skewTriangles);







//////////////////SOLUTION SECTION-1 /////////////////////
////centering text vertically////////



function sideTextAlign(){

	$(".sol-text").each(function(){
		
		if ($(window).width() >= 1024){

			var sidePicHeight= $(this).parent().find($(".side-img-block")).height();
			var sideTextHeight= $(this).height();

			if ($(this).hasClass("sol-text-higher")){
				var sideTextMarginTop = sidePicHeight/2 - sideTextHeight/2 -60;
			}else{
				var sideTextMarginTop= sidePicHeight/2 - sideTextHeight/2;
			}
			
		
			// console.log(sideTextMarginTop);

			$(this).css("margin-top", sideTextMarginTop);			

		} else {
			$(this).css("margin-top", 0);
		}


	});

}


sideTextAlign();

$(window).resize(sideTextAlign);






function arrowAlign(){
	$(".arrow").each(function(){
		
		var arrowImgs = $(this).parent().find($("img"));

		var titleHeight= $(this).parent().find($(".sol-img-title")).height() + $(this).parent().find($(".sub-titles")).height();

		var highest = arrowImgs[0].height;
		for (i= 0; i < arrowImgs.length; i++ ){
			if(arrowImgs[i].height > highest) { 
				highest = arrowImgs[i].height; 
			} else{
				shortest= arrowImgs[i].height;
			}
		}

		// arrowImgs.each(function(i, img) {
		// 	if (img.height > highest) { highest = img.height; };
		// });

		arrowMarginTop= shortest/2 - $(".arrow").height()/2 + titleHeight; 


		$(this).css("margin-top", arrowMarginTop);


	});

	// var arrowMarginTop= $(".side-image-block img").height()/2 - $(".arrow").height()/2;
	// $(".arrow").css("margin-top", arrowMarginTop);
}

arrowAlign();
$(window).resize(arrowAlign);









/////////////////////////////////




});




