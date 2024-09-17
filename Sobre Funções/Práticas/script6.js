const cpf = document.querySelector('#cpf');
const btn = document.querySelector('#btn');
const isValid = document.querySelector('#resultadoCPF');

btn.addEventListener("click", function() {
    if (cpf.value.length === 11) {
        isValid.innerHTML = 'Aprovado'
    } else {
        isValid.innerHTML = 'Reprovado'
    }
})