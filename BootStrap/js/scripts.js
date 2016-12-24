$(window).resize(function() {
	// body...
	var cw = $(window).width();
	$('.background-box').css({'width':cw+'%'});

	cw = $(window).height();
	$('.background-box').css({'height':cw+'%'});
})
