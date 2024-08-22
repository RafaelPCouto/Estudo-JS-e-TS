const bebidaEscolhida = 'coca-cola';

function enviarBebida(bebida) {
    switch (bebida) {
        case 'coca-cola':
            return 'Enviando coca-cola';
        case 'pepsi':
            return 'Enviando pepsi';
        case 'guaraná':
            return 'Enviando guaraná';
        case 'café':
            return 'Enviando café';
        default:
            return 'Enviando água';
    };
};

console.log(enviarBebida());
console.log(enviarBebida(bebidaEscolhida));
console.log(enviarBebida('café'));
