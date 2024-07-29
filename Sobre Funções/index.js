/*
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
};

saudacao('mundo');
*/

function saudacao(nome) {
    return `Olá, ${nome}!`;
};

console.log(saudacao('mundo'));

const primeiraSaudacao = saudacao('Rafael');

console.log(primeiraSaudacao);

// Vale destacar que a função em JS, por padrão, retorna udefined, na ausência do return