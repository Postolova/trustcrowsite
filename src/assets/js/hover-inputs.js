const names = document.getElementsByClassName('form__radio-name');
console.log(names);

for (let i = 0; i < names.length; i++) {
	const element = names[i];
	element.addEventListener('mouseover', (e) => {
		let target = e.target;
		target.previousSibling.style.backgroundColor = '#d0efff';
	});
	element.addEventListener('mouseout', (e) => {
		let target = e.target;
		target.previousSibling.style.backgroundColor = '#fff';
	});
};
