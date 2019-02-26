let openMenu = document.getElementById('#');

const toggleMenu = () => {
	menu.classList.toggle('menu-open');
	console.log('test');
};

function changeImage() {
	console.log(document.getElementById('menu-button').src);

	if (document.getElementById('menu-button').src.includes('img/nav-hamburger.png')) {
		console.log('its the burger');
		document.getElementById('menu-button').src = 'img/nav-hamburger-close.png';
	} else {
		console.log('its not the burger');
		document.getElementById('menu-button').src = 'img/nav-hamburger.png';
	}
}

const menuOpen = document.querySelector('.menu-open');

const menu = document.querySelector('.drop-menu');

const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', toggleMenu);
