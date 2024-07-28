const nome = prompt('Digite o seu nome: ');

const nomeMinusculo = nome.toLocaleLowerCase();

document.body.innerHTML += `O seu nome é ${nome}.<br>`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}.<br>`;
document.body.innerHTML += `O seu nome é ${nome}.<br>`;
document.body.innerHTML += `O o primeiro indice da letra L do seu nome é ${nome.indexOf('l')}.<br>`;
document.body.innerHTML += `O ultimo índice da letra R em seu nome é ${nomeMinusculo.lastIndexOf('r')}.<br>`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice(-3, nome.length)}.<br>`;
// document.body.innerHTML += `As últimas três letras do seu nome são: ${nome[nome.length -3]}${nome[nome.length -2]}${nome[nome.length -1]}.<br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}.<br>`;
document.body.innerHTML += `O seu nome maiusculo é ${nome.toUpperCase()}.<br>`;
document.body.innerHTML += `O seu nome minusculo é ${nome.toLowerCase()}.<br>`;