$(document).ready(function(){

////////hover expand///////////

$('.solutions-detail img').mouseenter(function(){

	$('#hover-expand').fadeIn();
	
});


$('.solutions-detail img').mouseleave(function(){

	$('#hover-expand').fadeOut();
	
});





$.get("nav.html", function(data){
    $(this).children.html(data);
});


});