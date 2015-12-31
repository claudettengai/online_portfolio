




function hamburgerColor(picBottomHeight){
	var windowTop = ($(window).scrollTop());
	var hamburgerFixedTop = parseInt($('.right-off-canvas-toggle .menu-display').css('marginTop'));
	var bottomBarfromTop= windowTop + hamburgerFixedTop + (parseInt($('.top-bar').css('height')))/2 + (parseInt($('.top-bar').css('height')))/2;
	var middleBarfromTop= windowTop + hamburgerFixedTop + (parseInt($('.top-bar').css('height')))/2;
	var topBarfromTop= windowTop + hamburgerFixedTop;


	////////.12 comes from #head-bottom clip-path 



		if (bottomBarfromTop <= picBottomHeight) {
			$('.bottom-bar, .bottom-bar-close').addClass('bar-against-pic-color');
		}else{
			$('.bottom-bar, .bottom-bar-close').removeClass('bar-against-pic-color');
		}


		if (middleBarfromTop <= picBottomHeight) {
			$('.middle-bar, .middle-bar-close').addClass('bar-against-pic-color');
		}else{
			$('.middle-bar, .middle-bar-close').removeClass('bar-against-pic-color');
		}

		if (middleBarfromTop <= picBottomHeight) {
			$('.top-bar, .top-bar-close').addClass('bar-against-pic-color');
		}else{
			$('.top-bar, .top-bar-close').removeClass('bar-against-pic-color');
		}
}






////about me page in script at bottom=---

// var aboutMePicBottom= ($(window).height() * .12) - parseInt($('#about #head-bottom').css('marginTop'));


// $(document).ready(function(){
// 	hamburgerColor(aboutMePicBottom);
// });

// $(document).scroll(function(){
// 	hamburgerColor(aboutMePicBottom);
// });














