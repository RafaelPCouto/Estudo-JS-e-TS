const conversionFactor = 0.01;

// Criação de um dicionário para centralizar / padronizar uma regra, facilita manutenção e alterações

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY'
};

// Geração de texto baseado no status retornado, facilita o uso da informação pelo front end
// Utilizando Object Mapping

function getClassificationDetail(classification) {
    return {
        [IMC_STATUS_DICT.UNDERWEIGHT]: 'Abaixo do peso',
        [IMC_STATUS_DICT.REGULAR]: 'Peso ideal',
        [IMC_STATUS_DICT.OVERWEIGHT]: 'Acima do peso',
        [IMC_STATUS_DICT.OBESITY]: 'Obesidade',
    } [classification] || 'Falha em obter o status';
};

// Classificação do IMC em si, ordenando o número obtido pelo cálculo

function classificationIMC(imc) {
    if (imc < 18.5) {
        return IMC_STATUS_DICT.UNDERWEIGHT;
    } else if (imc < 25) {
        return IMC_STATUS_DICT.REGULAR;
    } else if (imc < 30) {
        return IMC_STATUS_DICT.OVERWEIGHT;
    } else {
        return IMC_STATUS_DICT.OBESITY;
    };
};

// Cálculo do IMC

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;

    height *= conversionFactor;

    let imc = weight / (height * height);
    const classification = classificationIMC(imc);
    const classificationDetail = getClassificationDetail(classification)
    const result = `O resultado do IMC é de ${imc}`;
    const isHealthy = true;

    return {
        name: person.name,
        imc,
        classification,
        classificationDetail,
        result,
        isHealthy
    };
};

// Criação de objetos 

const person1 = {
    name: 'Fausto',
    weight: 70,
    height: 170
};

const person2 = {
    name: 'Laryssa',
    weight: 50,
    height: 165
};

const person3 = {
    name: 'Anderson',
    weight: 108,
    height: 192
}

console.log(calculateIMC(person2));
console.log(calculateIMC(person1));
console.log(calculateIMC(person3));
