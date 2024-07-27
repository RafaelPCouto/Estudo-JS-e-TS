/**
 * Aritméticos
 * + Adição / Concatenação
 * - / *
 * ** Potenciação
 * % Resto da divisão
 * Precedência de execução : () ** %/* +-
 */

let num1 = 5;
const num2 = 10;

console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 + num2 + num1);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

/**
 * Incremento ++
 * Decremento --
 */

num1++
console.log(num1);
num1--
console.log(num1);

console.log(--num1); // Pré decremento (Evitar usar incremento ou decremento no próprio log)

const passo = 5;
num1 = num1 + passo;
console.log(num1);
num1 += passo;
console.log(num1);
num1 -= passo;
console.log(num1);
num1 *= passo;
console.log(num1);
num1 /= passo;
console.log(num1);
num1 **= passo;
console.log(num1);
