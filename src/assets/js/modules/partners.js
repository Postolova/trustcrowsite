const partnersSlide = document.querySelectorAll('.partners__logo-desc');
const partnersBox = document.querySelector('.partners__box');
const partnersBtn = document.querySelectorAll('.partners__tab');

for (const slide of partnersSlide) {
	slide.style.display = 'none';
}

document.getElementById('partners__logo-tab1').style.display = 'flex';
document.getElementById('partners__logo-tab1').classList.add('partners__logo-desc--active1');

function openBlock (e) {
	const currentID = e.target.dataset.tab;

	for (const slide of partnersSlide) {
		slide.style.display = 'none';
	}

	for (const btn of partnersBtn) {
		btn.classList.remove('partners__tab--active');
	}

	document.getElementById(currentID).style.display = 'flex';
	if (e.target.className === 'partners__tab') {
		const currentClass = e.target.dataset.active;
		e.target.classList.add('partners__tab--active');
		document.getElementById(currentID).classList.add(currentClass);
	}
};

partnersBox.addEventListener('click', e => {
	if (e.target.className === 'partners__tab') {
		openBlock(e);
	}
});
