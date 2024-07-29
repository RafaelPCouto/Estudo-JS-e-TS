const nome = prompt('Digite o seu nome: ');

const nomeMinusculo = nome.toLocaleLowerCase();

document.body.innerHTML += `O seu nome é <strong>${nome}</strong>.<br>`;
document.body.innerHTML += `O seu nome tem <strong>${nome.length}</strong> letras.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1]}</strong>.<br>`;
document.body.innerHTML += `O seu nome é <strong>${nome}</strong>.<br>`;
document.body.innerHTML += `O o primeiro indice da letra L do seu nome é <strong>${nome.indexOf('l')}</strong>.<br>`;
document.body.innerHTML += `O ultimo índice da letra R em seu nome é <strong>${nomeMinusculo.lastIndexOf('r')}</strong>.<br>`;
document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong>.<br>`;
// document.body.innerHTML += `As últimas três letras do seu nome são: ${nome[nome.length -3]}${nome[nome.length -2]}${nome[nome.length -1]}.<br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>.<br>`;
document.body.innerHTML += `O seu nome maiusculo é <strong>${nome.toUpperCase()}</strong>.<br>`;
document.body.innerHTML += `O seu nome minusculo é <strong>${nome.toLowerCase()}</strong>.<br>`;