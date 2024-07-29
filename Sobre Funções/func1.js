function soma(x = 1, y = 5) {
    const resultado = x + y;
    return resultado;
    console.log('Olá, mundo!'); // A função não é mais executada após a palavra reservada 'return'
}

console.log(soma(5, 8));
console.log(soma(5, 5));

// Variáveis dentro da função estão 'protegidas', o escopo da função não se altera por fora

let resultado = soma(10, 20);
console.log(resultado);

resultado = soma('Rafael ', 'Couto');
console.log(resultado);

let semParametros = soma();
console.log(semParametros);