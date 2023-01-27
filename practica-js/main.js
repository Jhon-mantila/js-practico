const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

burgerMenu.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu(){
    console.log('Click Desktop');
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    console.log('Click mobile');
    menuMobile.classList.toggle('inactive');
}

console.log('Ingreso al archivo');