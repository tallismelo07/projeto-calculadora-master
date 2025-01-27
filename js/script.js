const primeiroValor = document.getElementById('valor-1');
const segundoValor = document.getElementById('valor-2');
const mudancaIcone = document.getElementById('valor-x');
const resultadoValor = document.getElementById('valor-resultado');
const valoresPrincipais = document.getElementById('valores-principais')

let opcao = Number(window.prompt('Opcoes para calcular: 1, 2, 3, 4: '))
let digitePrimeiroValor = Number(window.prompt('Digite o primeiro valor: '));
let digiteSegundoValor = Number(window.prompt('Digite o segundo valor: '));

const valoresTotais = {
    valor1: digitePrimeiroValor,
    valor2: digiteSegundoValor,

    soma(){
        return this.valor1 + this.valor2;
    },

    subtracao() {
        return this.valor1 - this.valor2;
    },

    multiplicacao(){
        return this.valor1 * this.valor2;
    },

    divisao(){
        return this.valor1 / this.valor2;
    },
}

if (opcao === 1) {
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = '+';
    resultadoValor.innerHTML = valoresTotais.soma();
} else if (opcao === 2) {
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = '-';
    resultadoValor.innerHTML = valoresTotais.subtracao();
} else if (opcao === 3) {
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = 'x';
    resultadoValor.innerHTML = valoresTotais.multiplicacao();
} else if (opcao === 4) {
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = '/';
    resultadoValor.innerHTML = valoresTotais.divisao();
} else {
    valoresPrincipais.innerHTML = `
    <span style="
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: white;
        display: inline-block;">
        O sistema está em sobrecarga... Obrigado por enquanto! ;)
    </span>`;
}



