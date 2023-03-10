console.log("Hello, World.");
//querySelector para etiquetas nativas
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const p_id = document.getElementById('pid');
const clases = document.getElementsByClassName('parrafo') ;

console.log(h1.outerHTML);
console.log(p_id);
console.log(clases);
//muestra las propiedades de los selectores
console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

console.log(input.value);

//innerHTML tambén me permite ingresar etiquetas html
h1.innerHTML = "Manipulación <i>DOM</i>";
//innerText solo texto no permite etiquetas 
pid.innerText = "Cambiando el parrafo <br>";
//agregando atributo

let atributo = h1.getAttribute('titulo');
let atributo2 = h1.getAttribute('class');
h1.setAttribute('class', 'cambieClase');

console.log({atributo, atributo2});

//agregando clases
h1.classList.add('rojo');
h1.classList.add('verde');
//Eliminando clases
h1.classList.remove('verde');

//h1.classList.toggle('amarillo');
//h1.classList.contains('verde');

input.value = "123";

let img = document.createElement('img');

//img.src = 'https://3ztech.com.co/wp-content/uploads/2022/11/JHON.png';
img.setAttribute('src', 'https://3ztech.com.co/wp-content/uploads/2022/11/JHON.png');
pid.append(img);
console.log({img});
console.log(img);