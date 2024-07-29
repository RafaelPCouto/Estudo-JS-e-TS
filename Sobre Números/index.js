// IEEE 754-2008

let num1 = 1; // number
let num2 = 1.3; // number
let num3 = 5.56265256;
let num4 = 5;

console.log(num1.toString() + num2);
console.log(typeof num1);

num1 = num1.toString;
console.log(num1 + num2);

num3 = num3.toFixed(2);
console.log(num3);

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num3));
console.log(Number.isInteger(num4));

let temp = num2 * 'Oi';
console.log(temp);

console.log(Number.isNaN(num3));
console.log(Number.isNaN(num1));
console.log(Number.isNaN(num4));
console.log(Number.isNaN(temp));