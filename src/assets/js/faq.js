let panelItem = document.querySelectorAll('.question-text');
let active = document.getElementsByClassName('.answer--active');

Array.from(panelItem).forEach(function (item) {
	item.addEventListener('click', function () {
		if (active.length > 0 && active[0] !== this) {
			active[0].classList.remove('answer--active');
		}
		this.classList.toggle('answer--active');
	});
});
