/**
 * &&
 * ||
 * !
 */

// console.log(true && true && true && true);

const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);

const expressaoOr = false || true;
console.log(expressaoOr);

// Exemplos de prompt
let usuario = 'Rafael';
const senha = '123456';

let vaiLogar = usuario === 'Rafael' && senha === '123456';

console.log(vaiLogar);

usuario = 'Luiz';

vaiLogar = usuario === 'Rafael' && senha === '123456';

console.log(vaiLogar);