let diaSemana = 'quinta';

function cafePorDia(dia) {
    switch(dia) {
        case 'segunda':
            return 'Hoje é dia de Mocha';
        case 'terça':
            return 'Hoje é dia de Expresso';
        case 'quarta':
            return 'Hoje é dia de Macchiato';
        case 'quinta':
            return 'Hoje é dia de Capuccino';
        case 'sexta':
            return 'Hoje é dia de Latte';
        case 'sabado':
        case 'domingo':
            return 'Hoje é dia de café especial';
        default:
            return 'Dia inválido';
    };
};

console.log(cafePorDia(diaSemana));
console.log(cafePorDia('segunda'));
console.log(cafePorDia('terça'));
console.log(cafePorDia('quarta'));
console.log(cafePorDia('quinta'));
console.log(cafePorDia('sexta'));
console.log(cafePorDia('sabado'));
console.log(cafePorDia('domingo'));
console.log(cafePorDia('nao sei'));
