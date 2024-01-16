// Game page
const userName = localStorage.getItem('name');
const userSurname = localStorage.getItem('surname');
const userText = document.getElementById('userName');
userText.textContent = userName + ' ' + userSurname;

const elList = document.querySelector('.game-list');
const backBtn = document.getElementById('back-btn');
const elAudioCorrect = document.querySelector('.answer');
const elAudioIncorrect = document.querySelector('.error');
const elAudioGameOver = document.querySelector('.game-over');
const elWinner = document.querySelector('.winner');
const elCount = document.querySelector('.count');

let count = 0;

backBtn.addEventListener('click', function () {
	location.href = 'home.html';
});

const wordPairs = [];
for (let i = 0; i < 20; i++) {
	const word = words[Math.floor(Math.random() * words.length)];
	wordPairs.push(word);
}

const allArr = [];
for (let i = 0; i < wordPairs.length; i++) {
	const item = wordPairs[i];

	allArr.push(item.uz, item.en);
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const shuffledWords = shuffleArray(allArr);
}
render(allArr);

function render(arr) {
	for (let i = 0; i < arr.length; i++) {
		const item = allArr[i];
		elCount.textContent = `Count: ${count}`;
		elList.innerHTML += `
			<li class='item'>
			<button class='button2' data-id="${item.id}">${item.word}</button>
			</li>
		`;
	}
}
let newArr = [];
elList.addEventListener('click', function (evt) {
	if (evt.target.matches('.button2')) {
		newArr.push(evt.target.dataset.id);
	}

	if (newArr.length == 2 && newArr[0] == newArr[1]) {
		elAudioCorrect.play();
		elCount.textContent = `Count: ${(count += 1)}`;
		newArr = [];
	}
	if (newArr.length == 2 && newArr[0] != newArr[1]) {
		elAudioIncorrect.play();
		newArr = [];
	}
});

// Game page
