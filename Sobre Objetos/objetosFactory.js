// Factory

// function criarPessoas(nome, idade, esporte) {
//     return {
//         nome: nome,
//         idade: idade,
//         esporte: esporte
//     };
// };



function criarPessoas(nome, idade, esporte) {
    return { nome, idade, esporte};
};

const pessoa1 = criarPessoas('Luiz Henrique', 27, 'judô');
const pessoa2 = criarPessoas('Larissa', 27, 'volei');
const pessoa3 = criarPessoas('Matheus', 30, 'krav maga');
const pessoa4 = criarPessoas('Daniel', 26, 'basquete');

console.log(pessoa1);
console.log(pessoa1.nome, pessoa1.esporte);