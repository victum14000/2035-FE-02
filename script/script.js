const blocksElem = document.querySelector('#blocks');
const formElem = document.forms[0];
const imageElem = formElem.image;
const productsElem = document.querySelector('#products');

function createCard(){
	event.preventDefault();
	const nameElem     = formElem.name;
	const lastNameElem = formElem.lastName;
	const emailElem    = formElem.email;
	const urlElem      = formElem.photo;

	const card   = document.createElement('div');
	const cardH2 = document.createElement('h2');
	const email  = document.createElement('p');
	const photo  = document.createElement('div');
	const main   = document.createElement('div');
	const cross	 = document.createElement('div');

	card.classList.add('card');
	photo.classList.add('photo');
	cross.classList.add('cross');

	cross.innerText = '☓';
	cardH2.innerText = lastNameElem.value + ' ' + nameElem.value;
	email.innerText  = emailElem.value;

	photo.style.backgroundImage = `url("${urlElem.value}")`;

	main.append(cardH2, email);
	card.append(main, photo, cross);

	blocksElem.appendChild(card);

	nameElem.value     = '';
	lastNameElem.value = '';
	emailElem.value    = '';
	urlElem.value      = '';

	cross.addEventListener('click', ()=>card.remove());

	card.addEventListener('dblclick', ()=>{
		const star = '＊';

		cardH2.innerText = star.repeat(cardH2.innerText.length);
		email.innerText  = star.repeat(email.innerText.length);
		main.classList.toggle('active');	

		photo.style.backgroundImage = null;	
		photo.classList.add('background');		
	});
}

formElem.addEventListener('submit', createCard);