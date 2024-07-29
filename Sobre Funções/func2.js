// Outra forma de declarar uma função

const raiz = function(num) {
    const raizQuadrada = num ** (1/2);
    return raizQuadrada;
};

const raizCubica = function(num) {
    const rCubica = num ** (1/3);
    return rCubica;
}

console.log(raiz(9));
console.log(raiz(64));
console.log(raizCubica(125)); // A limitação de interpretação do JS entrega 4.99 .....
console.log(raizCubica(1000)); // Limitação do JS em raízes cúbicas utilizando matemática pura