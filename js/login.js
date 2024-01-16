const formHandle = document.getElementById('form');

formHandle.addEventListener('submit', function (evt) {
	evt.preventDefault();

	const name = document.getElementById('name').value;
	const surname = document.getElementById('surname').value;
	const age = document.getElementById('age').value;

	if ((name, surname, age)) {
		localStorage.setItem('name', name);
		localStorage.setItem('surname', surname);
		localStorage.setItem('age', age);
		location.href = 'home.html';
	} else {
		alert("Ma'lumotlarni to'ldiring");
	}
});
