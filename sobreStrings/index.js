//                    0123456789
const minhaString  = 'Penso, logo existo';

console.log(minhaString.indexOf('texto'));
console.log(minhaString.indexOf('u', 2)); // O número indica o marco inicial

console.log(minhaString.lastIndexOf('o'));
console.log(minhaString.lastIndexOf('o', 2)); // A busca é feita de trás para frente

console.log(minhaString.match(/[a-z]/));
console.log(minhaString.match(/[a-z]/g));

console.log(minhaString.search(/x/));

console.log(minhaString.replace('logo', 'Outra'));
console.log(minhaString.replace(/logo/, 'Adamastor'));
console.log(minhaString.replace('o', '*'));
console.log(minhaString.replace(/o/, '*'));
console.log(minhaString.replace(/o/g, '*'));

console.log(minhaString.length);

console.log(minhaString.slice(1, 5));

console.log(minhaString.split(' ', 1));