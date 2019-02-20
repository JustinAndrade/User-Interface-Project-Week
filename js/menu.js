let openMenu = document.getElementById('#')

const toggleMenu = () => {
    menu.classList.toggle('menu-open');

    console.log('test');
};

const menuOpen = document.querySelector('.menu-open')

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', toggleMenu);