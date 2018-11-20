var $ = require('jquery');

$('.partners__tab').click(function () {
	let currentTab = $(this).attr('data-active');
	let currentIndex = $(this).index();

	$('partners__tab').removeClass('partners__tab--active');
	$('.partners__logo-desc').removeClass('active partners__logo-desc--active1 partners__logo-desc--active2 partners__logo-desc--active3 partners__logo-desc--active4');

	$('.partners__logo-desc').eq(currentIndex).addClass('active ' + currentTab);
});
