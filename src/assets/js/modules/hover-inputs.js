const names = document.querySelectorAll('.form__radio-name');

for (const element of names) {
	element.addEventListener('mouseover', (e) => {
		let target = e.target;
		target.previousSibling.style.backgroundColor = '#d0efff';
	});
	element.addEventListener('mouseout', (e) => {
		let target = e.target;
		target.previousSibling.style.backgroundColor = '#fff';
	});
};
