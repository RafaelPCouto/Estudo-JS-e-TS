/**
 * Referência (mutável) - array, object, function
 * Apontam para o mesmo lugar na memória - Passados por referência
 * Referência no mesmo lugar na memória
 */

let list = [1, 2, 3, 4, 5];
let ref = list;
let c = ref;
let indList = [...ref] // Driblando a mutabilidade, fazendo uma cópia

console.log(list, ref);

list.push(58);
console.log(list, ref);

ref.pop();
console.log(list, ref);

list.push('Luis');
console.log(list, ref, c);

console.log(indList);

// Aplicando em objetos

const pessoa1 = {
    nome: 'Luis Henrique',
    idade: 27
};

const pessoa2 = pessoa1;

const pessoa3 = {...pessoa1};

console.log(pessoa1.nome, pessoa2.nome);

pessoa1.nome = 'Juca Bala';

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

console.log(pessoa1, pessoa2, pessoa3);