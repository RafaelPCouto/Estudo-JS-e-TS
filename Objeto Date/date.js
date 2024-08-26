// Formato 

let data = new Date(0); // Data inicial do objeto, TimeStamp Unix ou época Unix

console.log(data.toString());

// A contagem é feita em milisegundos

const tresHoras = 1000 * 60 * 60 * 3;

const umDia = 1000 * 60 * 60 * 24;

data = new Date(0 + tresHoras + umDia); // chegando em 1970

console.log(data);

data = new Date(2019, 3); // A contagem dos meses vai de 0 a 11, logo, mes 3 = abril.

console.log(data);

