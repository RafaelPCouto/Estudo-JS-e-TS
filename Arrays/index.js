// O ideal é utilizar somente um tipo de dado, embora o Js não restrinja

let alunos = ['Larissa', 8, true, null]; // Funciona, mas não é uma boa prática

//                      0         1         2         3       4
const listaAlunos = ['Larissa', 'Luiz', 'Arnaldo', 'Maria', 'Rita'];

console.log(listaAlunos);
console.log(listaAlunos[2]);

listaAlunos[1] = 'Thomás';

console.log(listaAlunos);

listaAlunos[5] = 'Luisa'; // É possível, mas pouco prático em situações reais

console.log(listaAlunos);
console.log(listaAlunos.length);

// Por curiosidade, pode-se adicionar itens usando o length

listaAlunos[listaAlunos.length] = 'Fausto';
listaAlunos[listaAlunos.length] = 'Eva';


listaAlunos.push('Miguel'); // adicionar ao final
console.log(listaAlunos);

listaAlunos.unshift('Fábio'); // adicionar ao início
console.log(listaAlunos);
listaAlunos.unshift('Laura'); // adicionar ao início
console.log(listaAlunos);

let removido = listaAlunos.pop(); // remover o último
console.log(removido);
console.log(listaAlunos);

removido = listaAlunos.shift(); // remove o primeiro
console.log(removido);
console.log(listaAlunos);

delete listaAlunos[8]; // remover um item específico, sem alterar os índices
console.log(listaAlunos);
console.log(listaAlunos[8]); // deixa o indice vazio, leia-se, undefined

const listaCortada = listaAlunos.slice(1, 4); // O método slice inclui o primeiro indice, e exclui o último
console.log(listaCortada);

const outraListaCortada = listaAlunos.slice(2, -2);
console.log(outraListaCortada);

console.log(typeof listaAlunos); // A tipagem de um array é objeto

// Se quiser ter certeza de que se está trabalhando com um Array

console.log(listaAlunos instanceof Array);
console.log(alunos instanceof Array);

alunos = 123;

console.log(alunos instanceof Array);