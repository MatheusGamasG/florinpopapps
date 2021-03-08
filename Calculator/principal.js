const resultado = document.querySelector('#numPrincipal');
const historyDisplay = document.querySelector('#numHistory');
const igualdadeFinal = document.querySelector('.equal');
const operation = document.querySelectorAll('.operation');
const apagarC = document.querySelector('.apagarC');
const apagarCE = document.querySelector('.apagarCE');
const backspace = document.querySelector('.backspace');
const negPosSignal = document.querySelector('.inversao');
const numeroVirgula = document.querySelector('.virg');
const numerosLiArray = document.querySelectorAll('.number');
const numerosArray = [];
let holdOp;

numerosLiArray.forEach(function (num) {
    num = parseInt(num.textContent, 10);
    numerosArray.push(num);
})

numerosLiArray.forEach(function colocaNumero(num) {
    num.addEventListener('click', mostraNumeros);
})

igualdadeFinal.addEventListener('click', operaResultado);
apagarCE.addEventListener('click', apagaTudo);
apagarC.addEventListener('click', apagaAtual);
backspace.addEventListener('click', apagaUltimoNumero);
negPosSignal.addEventListener('click', inverteSinal);
numeroVirgula.addEventListener('click', numeroDecimal);

function mostraNumeros(evento) {
    numerosArray.forEach(function (numero) {
        if(numero == evento.target.textContent) {
            if(resultado.value == 'O') {
                resultado.value = numero;
            } else {
                resultado.value += numero;
            }
       }
    })
}

operation.forEach(function colocaOperacao(op) {
    op.addEventListener('click', function () {
        if(resultado.value == 'O') {
            historyDisplay.value = historyDisplay.value.slice(0,historyDisplay.value.length - 1);
            historyDisplay.value = historyDisplay.value + op.textContent;
            holdOp = op.textContent;
            return;
        }
        if(historyDisplay.value.includes('=')) {
            historyDisplay.value = resultado.value + " " + op.textContent;
            holdOp = op.textContent;
            resultado.value = 'O';
        } else {
            if(resultado.value >= 0 && historyDisplay.value.length > 0) {
                    operaResultado();
            }
            historyDisplay.value = resultado.value + " " + op.textContent;
            resultado.value = 'O';
            holdOp = op.textContent;
        }
    })
})

function operaResultado() {
    if (historyDisplay.value.length == 0) {
        return;
    }
    let tempNum = 0;
    let tempResult = 0;
    tempNum = parseFloat(historyDisplay.value, 10);
    tempResult = parseFloat(resultado.value, 10);
   
    if(holdOp == '+') {
        tempNum = tempNum + tempResult;
    } else if (holdOp == '/') {
        tempNum = tempNum / tempResult;
    } else if (holdOp == '*') {
        tempNum = tempNum * tempResult;
    } else if (holdOp == '-') {
        tempNum = tempNum - tempResult;
    }

    tempNum.toFixed(2);

    
    historyDisplay.value = historyDisplay.value + ' ' + resultado.value + ' =';
    resultado.value = tempNum;
}

function apagaTudo() {
    resultado.value = 'O';
    historyDisplay.value = '';
}

function apagaAtual() {
    resultado.value = 'O';
}

function apagaUltimoNumero() {
    let length = resultado.value.length;
    resultado.value = resultado.value.slice(0,length-1);
    if(resultado.value == '') {
        resultado.value = 'O';
    }
}

function inverteSinal() {
    resultado.value = resultado.value * (-1);
}

function numeroDecimal() {
    resultado.value = parseInt(resultado.value, 10).toFixed(1);
    apagaUltimoNumero();
}