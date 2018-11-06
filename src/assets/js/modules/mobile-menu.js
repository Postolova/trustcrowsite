
const openBTN = document.querySelector('.hamburger');
const closeBTN = document.querySelector('.close-btn');
const links = document.querySelector('.header__list');
const headerLinks = document.querySelectorAll('.header__link');

openBTN.addEventListener('click', function () {
	const popUp = document.querySelector('.popup-menu');
	popUp.classList.add('popup-menu--active');
	popUp.appendChild(links);
	links.classList.add('popup-links');

	for (let i = 0; i < headerLinks.length; i++) {
		const el = headerLinks[i];
		if (el.classList.contains('active-link')) {
			el.classList.remove('active-link');
		}
	}
	if (popUp.classList.contains('popup-menu--active')) {
	} else {
		popUp.classList.remove('popup-menu--active');
	}
});

closeBTN.addEventListener('click', function () {
	const popUp = document.querySelector('.popup-menu');
	popUp.classList.remove('popup-menu--active');
});