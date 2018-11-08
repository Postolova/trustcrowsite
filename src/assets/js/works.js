import './modules/slider';
const tabs = document.querySelector('.works__slider-tabs');

function openBlock (btn) {
	// const worksSlider = document.querySelectorAll('.works__slider');
	const worksBtns = document.querySelectorAll('.works__slider-btn');
	const currentId = btn.getAttribute('data-tab');

	for (const worksBtn of worksBtns) {
		worksBtn.className.replace('works__slider-btn--active', '');
	}
	document.getElementById(currentId).style.display = 'block';
	btn.currentTarget.className += 'works__slider-btn--active';
};
tabs.addEventListener('click', e => {
	const target = e.target;
	if (target.className === 'works__slider-btn') {
		openBlock(target);
	}
});
