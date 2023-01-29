const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const cardContainer = document.querySelector('.cards-container');
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

const productList = [];
productList.push({
    name:'Computer',
    precio: 120,
    img: 'https://3ztech.com.co/wp-content/uploads/2022/11/pexels-sora-shimazaki-5926382.jpg'
});
productList.push({
    name:'Computer 1',
    precio: 220,
    img: 'https://3ztech.com.co/wp-content/uploads/2022/11/pexels-sora-shimazaki-5926382.jpg'
});
productList.push({
    name:'Computer 2',
    precio: 330,
    img: 'https://3ztech.com.co/wp-content/uploads/2022/11/pexels-sora-shimazaki-5926382.jpg'
});
/*
<div class="cards-container">
<div class="product-card">
    <img src="https://3ztech.com.co/wp-content/uploads/2022/11/pexels-sora-shimazaki-5926382.jpg" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120.00</p>
            <p>Computer</p>
        </div>                
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
</div>
*/
/*recoger el array por nombre del objeto la otra opción con el in */
renderProducts(productList);
function renderProducts(arr){

    for (let product of arr) {
        //console.log(product.name);
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardContainer.appendChild(productCard);
    }
}
console.log('Ingreso al archivo');