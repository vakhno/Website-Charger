if ($('.slider-spots').length > 0) {
	$('.slider-spots').slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: false,
		variableWidth: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		pauseOnHover: false,
	});
}

if ($('.slider-gifts').length > 0) {
	$('.slider-gifts').slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 6,
		variableWidth: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		pauseOnHover: false,
	});
}
