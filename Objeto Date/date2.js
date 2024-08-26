let data = new Date();
let diaSemana = data.getDay();

console.log(diaSemana); // Dia 0 = Domingo - início da contagem

function exibirDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            'Dia inválido'
    }
}

console.log(exibirDiaSemana(diaSemana));

data = new Date('1997-05-12 00:00:00');
diaSemana = data.getDay();

console.log(exibirDiaSemana(diaSemana));
