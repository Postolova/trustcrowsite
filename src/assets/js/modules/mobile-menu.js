
const openBTN = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger__button');
const lineTop = document.querySelector('.line__top');
const lineMiddle = document.querySelector('.line__middle');
const lineBottom = document.querySelector('.line__bottom');
const lines = document.querySelector('.lines');

openBTN.addEventListener('click', function () {
	const popUp = document.querySelector('.header__nav');
	if (openBTN.getAttribute('data-count') === '0') {
		popUp.classList.add('popup-menu--active');
		lineTop.classList.add('line__top--active');
		lineMiddle.classList.add('line__middle--active');
		lineBottom.classList.add('line__bottom--active');
		lines.classList.add('lines--active');
		hamburgerBtn.classList.add('hamburger__button--active');
		popUp.classList.add('popup-menu--active');
		openBTN.setAttribute('data-count', 1);
	} else if (openBTN.getAttribute('data-count') === '1') {
		popUp.classList.remove('popup-menu--active');
		lineTop.classList.remove('line__top--active');
		lineMiddle.classList.remove('line__middle--active');
		lineBottom.classList.remove('line__bottom--active');
		lines.classList.remove('lines--active');
		hamburgerBtn.classList.remove('hamburger__button--active');
		openBTN.setAttribute('data-count', 0);
	}
});
