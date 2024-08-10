/**
 * && -> false && true -> retorna o valor do dado que é interpretado como false
 * FALSY 
 * false
 * 0
 * ´´ `` ""
 * null / undefined
 * Nan
 */

console.log('Luiz' && 'Maria' && 1);
console.log('Luiz' && '' && 'Maria');
console.log('Luiz' && null && 'Maria');

// Usabilidade

function falarOi() {
    return 'Oi';
}

let condicional = true;
console.log(condicional && falarOi());

condicional = false;
console.log(condicional && falarOi());
