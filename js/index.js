const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    console.log('test');
};

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.open-menu-button');

menuButton.addEventListener('click', toggleMenu);