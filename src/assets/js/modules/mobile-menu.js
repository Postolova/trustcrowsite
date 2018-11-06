
const openBTN = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger__button');
/* const closeBTN = document.querySelector('.close-btn'); */
const links = document.querySelector('.header__list');
const headerLinks = document.querySelectorAll('.header__link');
const lineTop = document.querySelector('.line__top');
const lineMiddle = document.querySelector('.line__middle');
const lineBottom = document.querySelector('.line__bottom');
const lines = document.querySelector('.lines');

openBTN.addEventListener('click', function () {
	// eslint-disable-next-line eqeqeq
	const popUp = document.querySelector('.popup-menu');
	// eslint-disable-next-line eqeqeq
	if (openBTN.getAttribute('data-count') == 0) {
		popUp.classList.add('popup-menu--active');
		popUp.appendChild(links);
		links.classList.add('popup-links');
		lineTop.classList.add('line__top--active');
		lineMiddle.classList.add('line__middle--active');
		lineBottom.classList.add('line__bottom--active');
		lines.classList.add('lines--active');
		hamburgerBtn.classList.add('hamburger__button--active');
		for (let i = 0; i < headerLinks.length; i++) {
			const el = headerLinks[i];
			if (el.classList.contains('active-link')) {
				el.classList.remove('active-link');
			}
		};
		popUp.classList.add('popup-menu--active');
		openBTN.setAttribute('data-count', 1);
	// eslint-disable-next-line eqeqeq
	} else if (openBTN.getAttribute('data-count') == 1) {
		popUp.classList.remove('popup-menu--active');
		lineTop.classList.remove('line__top--active');
		lineMiddle.classList.remove('line__middle--active');
		lineBottom.classList.remove('line__bottom--active');
		lines.classList.remove('lines--active');
		hamburgerBtn.classList.remove('hamburger__button--active');
		openBTN.setAttribute('data-count', 0);
	}
});
