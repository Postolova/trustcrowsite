import Swiper from 'swiper';
var $ = require('jquery');

$('.works__slider').each(function (index) {
	var $this = $(this);
	$this.addClass('instance-' + index);

	var swiper = new Swiper('.instance-' + index, {
		loop: true,
		grabCursor: true,
		effect: 'fade',
		fadeEffect: { crossFade: true },
		allowTouchMove: true,
		observer: true,
		observeParents: true,
		pagination: {
			el: $this.find('.swiper-pagination')[0],
			type: 'bullets',
			totalClass: 'works__pagination',
			bulletClass: 'works__bullet',
			bulletActiveClass: 'works__bullet-active'
		},

		navigation: {
			nextEl: $this.find('.works__slider-button-next')[0],
			prevEl: $this.find('.works__slider-button-prev')[0]
		}
	});

	swiper.on('slideChange', function () {
		console.log('slide changed');
	});
});

$('.works__slider-btn').click(function () {
	if (!$(this).hasClass('works__slider-btn--active')) {
		let currentBlock = $(this).attr('data-tab');

		$('.works__slider-btn').removeClass('works__slider-btn--active');
		$(this).addClass('works__slider-btn--active');

		$('.works__slider').hide();
		$('#' + currentBlock).show();
	}
});

$('label.form__block-check').on('click', function () {
	let currentCheck = $(this).find('input[type="checkbox"]:checked').length;

	if (currentCheck > 0) {
		$(this).addClass('active');
	} else {
		$(this).removeClass('active');
	}
});

$('.options__item').click(function () {
	$('.options__item').removeClass('active');
	$(this).addClass('active');
});

let wpcf7Elm = document.querySelector('.wpcf7');

wpcf7Elm.addEventListener('wpcf7mailsent', function (event) {
	$(this).hide();
	$('.form__success').show();
}, false);

// const worksSlide = document.querySelectorAll('.works__slider');
// const tabs = document.querySelector('.works__slider-tabs');
// const worksBtn = document.querySelectorAll('.works__slider-btn');

// for (const slide of worksSlide) {
// 	slide.style.display = 'none';
// }

// document.getElementById('slider__tab-1').style.display = 'block';

// function openBlock (e) {
// 	const currentID = e.target.dataset.tab;

// 	for (const slide of worksSlide) {
// 		slide.style.display = 'none';
// 	}

// 	for (const btn of worksBtn) {
// 		btn.classList.remove('works__slider-btn--active');
// 	}

// 	document.getElementById(currentID).style.display = 'block';
// 	if (e.target.className === 'works__slider-btn') {
// 		e.target.classList.add('works__slider-btn--active');
// 	}
// };

// tabs.addEventListener('click', e => {
// 	if (e.target.className === 'works__slider-btn') {
// 		openBlock(e);
// 	}
// });
