const newsBlocks = document.querySelectorAll('.news__blocks');
const pagination = document.querySelector('.news__pagination');
const newsBtn = document.querySelectorAll('.news__pagination-tab');

for (const block of newsBlocks) {
	block.style.display = 'none';
}

document.getElementById('news__blocks-tab1').style.display = 'block';

function openBeforeBlock (e) {

}
function openNextBlock (e) {
	console.log('after');
}
function openBlockNews (e) {
	const currentIdNews = e.target.dataset.tab;

	for (const block of newsBlocks) {
		block.style.display = 'none';
	}

	for (const btn of newsBtn) {
		btn.classList.remove('news__pagination-tab--active');
	}

	document.getElementById(currentIdNews).style.display = 'block';
	if (e.target.className === 'news__pagination-tab') {
		e.target.classList.add('news__pagination-tab--active');
	}
}

pagination.addEventListener('click', e => {
	if (e.target.className === 'news__pagination-tab') {
		openBlockNews(e);
	} else if (e.target.classList[1] === 'news__pagination-back') {
		openBeforeBlock(e);
	} else if (e.target.classList[1] === 'news__pagination-next') {
		openNextBlock(e);
	}
});
