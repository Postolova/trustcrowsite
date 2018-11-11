import Swiper from 'swiper';
export const worksSwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	initialSlide: 0,
	grabCursor: true,
	allowTouchMove: true,
	touchEventsTarget: '.swiper-container',
	keyboard: {
		enabled: true
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		bulletElement: 'div',
		totalClass: 'works__pagination',
		bulletClass: 'works__bullet',
		bulletActiveClass: 'works__bullet-active'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.works__slider-button-next',
		prevEl: '.works__slider-button-prev'
	}
});

const worksSlide = document.querySelectorAll('.works__slider');
const tabs = document.querySelector('.works__slider-tabs');
const worksBtn = document.querySelectorAll('.works__slider-btn');

for (const slide of worksSlide) {
	slide.style.display = 'none';
}

document.getElementById('slider__tab-1').style.display = 'block';

function openBlock (e) {
	const currentID = e.target.dataset.tab;

	for (const slide of worksSlide) {
		slide.style.display = 'none';
	}

	for (const btn of worksBtn) {
		btn.classList.remove('works__slider-btn--active');
	}

	document.getElementById(currentID).style.display = 'block';
	if (e.target.className === 'works__slider-btn') {
		e.target.classList.add('works__slider-btn--active');
	}
};

tabs.addEventListener('click', e => {
	if (e.target.className === 'works__slider-btn') {
		openBlock(e);
	}
});
