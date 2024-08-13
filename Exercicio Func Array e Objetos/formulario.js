// IIFE
const pessoas = [];

function meuEscopo() {
    const form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    const factory = (nome, sobrenome, peso, altura) => ({ nome, sobrenome, peso, altura });

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push(factory(nome, sobrenome, peso, altura));

        // pessoas.push({
        //     nome: nome,
        //     sobrenome: sobrenome,
        //     peso: peso,
        //     altura: altura
        // })

        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso}kg ${altura}m</p>`;

        console.log(pessoas);

    }

    form.addEventListener('submit', recebeEventoForm)


}

meuEscopo();