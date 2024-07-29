let num = 9.5859485;
const numBaixo = Math.floor(num);
const numAlto = Math.ceil(num);
const numProximo = Math.round(num);



console.log(numAlto);
console.log(numBaixo);
console.log(numProximo);

console.log(Math.max(1, 2, 165, -2, 130, 55.55, -500));
console.log(Math.min(1, 2, 165, -2, 130, 55.55, -500));

// Não é um método de array

const numArray = [1, 2, 165, -2, 130, 55.55, -500]
console.log(Math.max(numArray));
console.log(Math.min(numArray));

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.pow(2, 10));
console.log(2 ** 10);

const num9 = 9;
const raizQuadrada = num9 ** (1/2); // ou 0.5

console.log(raizQuadrada);

// Em Js existe a divisão por 0, afinal, temos o infinity - em booleano, temos true