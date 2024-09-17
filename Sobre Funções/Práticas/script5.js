const btn = document.querySelector('#btn');
const texto = document.getElementsByClassName('info');

console.log(texto);


btn.addEventListener("click", teste)

function teste() {
    for (let i = 0; i < texto.length; i++) {
        texto[i].innerHTML = `Texto ${Math.floor(Math.random() * 10)}`;
    }
}
