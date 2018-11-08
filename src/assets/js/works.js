import './modules/slider';
const tabs = document.querySelector('.works__slider-tabs');
// .works__slider-btn--active
function openBlock (e) {
	const currentID = e.target.dataset.tab;

	const tabcontent = document.querySelectorAll('.works__slider');
	const tablinks = document.querySelectorAll('.works__slider-btn');

	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	for (let i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace('works__slider-btn--active', '');
	}
	document.getElementById(currentID).style.display = 'block';
	tablinks.classList.add('works__slider-btn--active');
};

tabs.addEventListener('click', e => {
	if (e.target.className === 'works__slider-btn') {
		openBlock(e);
	}
});
