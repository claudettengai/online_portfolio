// $(document).ready(function() {
  
//   $('header.toggle-topbar .menu-icon').onclick(function(){
//   	$()
//   })
// });


$(document).ready(function(){


	$('#fe-link').hover(function(){
		console.log('hello');


		// var FeLinkHeight= $('.fe-link img').height();
		// console.log(FeLinkHeight);

		// var bannerLineHeight= bannerHeight/24
		// console.log(bannerLineHeight)

		// $('.banner_overlay').css({
		// 	height: bannerHeight,
		// 	lineHeight: bannerLineHeight
		// });


		$('.work-overlay').fadeToggle('fast');
		
	});



	// $('.banner').mouseleave(function(){
	// 	$('.banner_overlay').animate({marginTop: "-10px", opacity:0}, 100);
});