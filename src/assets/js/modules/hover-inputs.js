const names = document.querySelectorAll('.form__radio-name');
const checkboxes = document.querySelectorAll('.form__checkbox--styling');

for (const element of checkboxes) {
	element.addEventListener('mouseover', (e) => {
		let target = e.target;
		target.style.backgroundColor = '#d0efff';
	});
	element.addEventListener('mouseout', (e) => {
		let target = e.target;
		target.style.backgroundColor = '#fff';
	});
};
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
