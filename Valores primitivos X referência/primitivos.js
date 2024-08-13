/**
 * Primitivos (imutáveis) - string, number, boolean, udefined, null (bigint, symbol)
 * Apontam para lugares diferentes na memória - Valores copiados
 */

// Exemplo: 012345678
let nome = 'Klaudemir';
console.log(nome[3]);

nome[3] = 'r'; // Operação que funcionaria em um array
console.log(nome[3], nome);

let a = 'A';
let b = a;

console.log(a, b);

a = 'Outra coisa';

console.log(a, b);