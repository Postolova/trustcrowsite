var $ = require('jquery');

$('.tariffs__item-btn').click(function () {
	let currentTariff = $(this).attr('data-order');

	$('.option__label[data-ordered="' + currentTariff + '"]').click();
});
