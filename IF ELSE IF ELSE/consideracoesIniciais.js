/**
 * Entre 0 e 11 - Bom dia
 * Entre 12 e 17 - Boa tarde
 * Entre 18 e 23 - Boa noite
 */

// O IF funciona perfeitamente sozinho, em detrimento do ELSE IF e do ELSE

const hora = 12;

if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}