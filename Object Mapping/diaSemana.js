let dia = 3;

const DAYS_OF_WEEK_DICT = {
    1: 'Domingo',
    2: 'Segunda-feira',
    3: 'Terça-feira',
    4: 'Quarta-feira',
    5: 'Quinta-Feira',
    6: 'Sexta-feira',
    7: 'Sábado',
};

// Embora a estrutura se assemelhe ao objeto, para ler uma das propriedades, usamos a sintaxe com colchetes, ao invés de '.'

console.log(DAYS_OF_WEEK_DICT[dia]);

dia = 8;

// Essa seria uma forma de driblar inputs indesejados, que no SWITCH CASE seria feito, por exemplo, no 'default'

console.log(DAYS_OF_WEEK_DICT[dia] || 'Dia não existente');
