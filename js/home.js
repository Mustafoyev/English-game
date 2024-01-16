// Home html home page

const userName = localStorage.getItem('name');
const userSurname = localStorage.getItem('surname');
const userText = document.getElementById('userName');
const logOut = document.getElementById('logout');

userText.textContent = userName + ' ' + userSurname;

const elEasyBtn = document.querySelector('.easy-btn');
const elMediumBtn = document.querySelector('.medium-btn');
const elHardBtn = document.querySelector('.hard-btn');

logOut.addEventListener('click', function () {
	localStorage.removeItem('name');
	localStorage.removeItem('surname');
	localStorage.removeItem('age');

	location.href = 'index.html';
});

elEasyBtn.addEventListener('click', function () {
	location.href = 'game.html';
});

elMediumBtn.addEventListener('click', function () {
	location.href = 'game.html';
});

elHardBtn.addEventListener('click', function () {
	location.href = 'game.html';
});

// Home html home page
