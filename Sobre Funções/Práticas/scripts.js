const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#resultado');
const btn = document.querySelector('#btn');

function somar(e) {
    e.preventDefault();
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}

btn.addEventListener("click", somar);