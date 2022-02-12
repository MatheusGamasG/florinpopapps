function executaConversao(evento) {
    evento.preventDefault();
    let numBinario = inputBin.value;
    let somaTotal = 0;
    let valor;
    let c = 0;
    // c corresponde à posição do número no array binário e o indexador do for corresponde à elevação da potência.
    for(let i = numBinario.length - 1; i >= 0; i--) {
        valor = numBinario[c] * Math.pow(2, i);
        somaTotal += valor;
        c++;
    }
    numBinario = somaTotal;
    inputDec.value = numBinario;
}

const inputBin = document.querySelector('.binNumber');
const inputDec = document.querySelector('.decNumber')
const button = document.querySelector('.button');
const mensagemErro = document.querySelector('.errorMessageApagado');
button.addEventListener('click', executaConversao);
inputBin.addEventListener('input', testaInput);

function testaInput(evento) {
    inputDec.value = '';
    mensagemErro.classList.add('errorMessageApagado');
    if(inputBin.value.length > 0) {
        if(evento.data < 0 || evento.data >= 2 || !evento.data.match(/\d/)) {
            mensagemErro.classList.remove('errorMessageApagado');
            mensagemErro.classList.add('errorMessage');
            inputBin.value = '';
        }
    }
}
