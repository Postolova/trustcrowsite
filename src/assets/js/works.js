import './modules/slider';

export function openBlock (e, blockName) {
	// const worksSlider = document.querySelectorAll('.works__slider');
	const worksBtns = document.querySelectorAll('.works__slider-btn');

	for (const worksBtn of worksBtns) {
		worksBtn.classList.remove('works__slider-btn--active');
	}
	document.getElementById(blockName).style.display = 'block';
	e.currentTarget.className += 'works__slider-btn--active';
};
