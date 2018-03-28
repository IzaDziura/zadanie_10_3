$(function(){
	//this code will execute after the DOM is loaded
});

var carouselList = $('carousel ul');

$('#clickme').click(function() {
	$('#carousel ul').animate({
		'marginLeft': -500
	}, 500, function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	});
});