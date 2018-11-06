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
