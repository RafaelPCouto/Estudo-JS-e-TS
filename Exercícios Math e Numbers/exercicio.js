const numeroEscolhido = prompt('Digite o seu número');
const numeroEscolhidoConvertido = Number(numeroEscolhido);
let numeroTitulo = document.getElementById('numero-titulo');
let divTexto = document.getElementById('texto');

numeroTitulo.innerText = numeroEscolhido;

divTexto.innerHTML += `<p>Raíz quadrada: <strong>${(numeroEscolhido ** (1/2))}</strong></p>`;

divTexto.innerHTML += `<p>É NaN: <strong>${isNaN(numeroEscolhidoConvertido)}</strong></p>`;

divTexto.innerHTML += `<p>${numeroEscolhidoConvertido} é inteiro: <strong>${Number.isInteger(numeroEscolhidoConvertido)}</strong></p>`;

// divTexto.innerHTML += `<p>${numeroEscolhidoConvertido} é inteiro: <strong>${!!numeroEscolhido}</strong></p>`;

divTexto.innerHTML += `<p>Arredondando para baixo <strong>${Math.floor(numeroEscolhidoConvertido)}</strong><p>`;

divTexto.innerHTML += `<p>Arredondando para cima <strong>${Math.ceil(numeroEscolhidoConvertido)}</strong><p>`;

divTexto.innerHTML += `<p>Com duas casas decimais <strong>${numeroEscolhidoConvertido.toFixed(2)}</strong><p>`;