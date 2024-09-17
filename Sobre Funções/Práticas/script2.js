const a = document.querySelector('#a');
const b = document.querySelector('#b');
const multiplicacao = document.querySelector('#multiplicacao');
const btn = document.querySelector('#btn');

// function multiplicar(e) {
//     e.preventDefault();
//     multiplicacao.innerHTML = parseInt(a.value) * parseInt(b.value);
// }

function multiplicar(e) {
    e.preventDefault();
    multiplicacao.innerHTML = parseInt(a.value) * parseInt(b.value);
}

btn.addEventListener("click", multiplicar);