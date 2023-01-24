const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const p = document.querySelector('.resultado');

const btn = document.querySelector('#btnCalcular');

console.log({h1,
input1,
input2,
btn});

function btnOnClic(){
    console.log("Escuchando el el boton");
    console.log(input1.value);

    console.log(input2.value);

    let resultado = parseInt(input1.value) + parseInt(input2.value);

    console.log ('Resultado:' + resultado);

    p.innerHTML = "<spam>Resultado: </spam>" + resultado;


 
}