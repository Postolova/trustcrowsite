var $ = require('jquery');

$('.question__item').click(function () {
	if (!$(this).find('.accordion').hasClass('active')) {
		$('.accordion').removeClass('active');
		$('.answer').slideUp();

		$(this).find('.accordion').addClass('active');
		$(this).find('.answer').slideDown();
	}
});
