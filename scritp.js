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