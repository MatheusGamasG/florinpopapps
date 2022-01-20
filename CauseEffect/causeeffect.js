class pessoa {
    User;
    NomeCompleto;
    Rua;
    Idade;
    Peso;
}

const user1 = document.querySelector('.user1');
const user2 = document.querySelector('.user2');
const user3 = document.querySelector('.user3');

var matheus = new pessoa();
var anaPaula = new pessoa();
var waldir = new pessoa();
matheus.User = user1;
matheus.NomeCompleto = 'Matheus Guimaraes'
matheus.Rua = 'Nilo Bettoni'
matheus.Idade = '26'
matheus.Peso = '97'
anaPaula.User = user2;
anaPaula.NomeCompleto = 'Ana Paula Serafim'
anaPaula.Rua = 'General Horta de Souza'
anaPaula.Idade = '21'
anaPaula.Peso = '62'
waldir.User = user3;
waldir.NomeCompleto = 'Waldir Guimarães'
waldir.Rua = 'Nilo Bettoni'
waldir.Idade = '55'
waldir.Peso = '106'



function expand() {
    if (this.childElementCount > 1) {
        this.lastChild.remove();
        return;
    }
    var texto = document.createElement('p');
    this.appendChild(texto);
    if (this == user1) {
        texto.innerHTML = `Nome Completo: ${matheus.NomeCompleto} <br> Rua: ${matheus.Rua} <br> Idade: ${matheus.Idade} <br> Peso: ${matheus.Peso}`;
    } else if (this == user2) {
        texto.innerHTML = `Nome Completo: ${anaPaula.NomeCompleto} <br> Rua: ${anaPaula.Rua} <br> Idade: ${anaPaula.Idade} <br> Peso: ${anaPaula.Peso}`;
    } else if (this == user3) {
        texto.innerHTML = `Nome Completo: ${waldir.NomeCompleto} <br> Rua: ${waldir.Rua} <br> Idade: ${waldir.Idade} <br> Peso: ${waldir.Peso}`;
    }
}

user1.addEventListener('click', expand);
user2.addEventListener('click', expand);
user3.addEventListener('click', expand);
