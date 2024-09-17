const texto = document.querySelector('#texto');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener("click", function() {
    let textSize = parseInt(texto.style.fontSize)
    texto.style.fontSize = textSize + 5;
})

btn2.addEventListener("click", function() {
    let textSize = parseInt(texto.style.fontSize)
    texto.style.fontSize = textSize -5;
})