const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');



menuEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    console.log('Click Desktop');
    console.log({desktopMenu});
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if(isAsideOpen){
        aside.classList.add('inactive');   
    }
    desktopMenu.classList.toggle('inactive');

}

function toogleMobileMenu(){
    console.log('Click mobile');
    
    const isAsideClose = aside.classList.contains('inactive');
    
    if(!isAsideClose){
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

function toogleCarritoAside(){
    console.log('Click carrito Aside');
    //aside.classList.toggle('inactive');
    //contains verifica si contiene la clase
    const isMobileMenuClose = menuMobile.classList.contains('inactive');
    desktopMenu.classList.add('inactive');
    if(!isMobileMenuClose){
        menuMobile.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

console.log('Ingreso al archivo');