/* Trajano Octavius tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925
*/

const nome = 'Trajano';
const sobrenome = 'Octavius';
let idade = 30;
let peso = 84;
const alturaEmMetro = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmMetro ** 2);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, mede ${alturaEmMetro} de altura, e seu imc é igual a ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);