/**
 * || -> false && true -> retorna o valor do primeiro dado que é interpretado como true ou o ultimo falso
 * TRUTHY
 * Qualquer valor que não seja FALSY
 */

console.log(0 || null || false || 'Rafael' || undefined || 'Sim');

let corUsuario = null;
console.log(corUsuario || 'preto'); // Neste exemplo, 'preto' seria como uma cor padrão

corUsuario = 'vermelho';
console.log(corUsuario || 'preto');


