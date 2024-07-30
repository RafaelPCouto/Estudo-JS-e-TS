const pessoa1 = {
    nome: 'Luiz Henrique',
    idade: 27,
    esporte: 'judô',

    falar() {
        console.log(`${this.nome} está falando que pratica ${this.esporte}.`);
    },

    incrementarIdade() {
        this.idade++;
    },

    falarIdade() {
        console.log(`${this.nome}: A minha idade atual é ${this.idade} anos`);
    }
};

pessoa1.falar();
pessoa1.incrementarIdade();
pessoa1.incrementarIdade();
pessoa1.falarIdade();