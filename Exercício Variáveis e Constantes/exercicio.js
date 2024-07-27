let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

let auxiliar;

auxiliar = varA;
varA = varB;
varB = varC;
varC = auxiliar;

console.log(varA, varB, varC);

// Segunda maneira

varA = 'F';
varB = 'O';
varC = 'L';

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);