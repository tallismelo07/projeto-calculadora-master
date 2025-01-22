const primeiroValor = document.getElementById('valor-1');
const segundoValor = document.getElementById('valor-2');
const mudancaIcone = document.getElementById('valor-x');
const resultadoValor = document.getElementById('valor-resultado');
const valoresPrincipais = document.getElementById('valores-principais')

let opcao = Number(window.prompt('Opcoes para calcular: 1, 2, 3, 4: '))
let digitePrimeiroValor = Number(window.prompt('Digite o primeiro valor: '));
let digiteSegundoValor = Number(window.prompt('Digite o segundo valor: '));

if (opcao === 1) {
    const soma = (valor1, valor2) => {
        return  valor1 + valor2; 
    };
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = '+';
    resultadoValor.innerHTML = soma(digitePrimeiroValor, digiteSegundoValor);
} else if (opcao === 2) {
    const subtracao = (valor1, valor2) => {
        return  valor1 - valor2; 
    };
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = '-';
    resultadoValor.innerHTML = subtracao(digitePrimeiroValor, digiteSegundoValor);
} else if (opcao === 3) {
    const multiplicacao = (valor1, valor2) => {
        return  valor1 * valor2; 
    };
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = 'x';
    resultadoValor.innerHTML = multiplicacao(digitePrimeiroValor, digiteSegundoValor);
} else if (opcao === 4) {
    const dividir = (valor1, valor2) => {
        return  valor1 / valor2; 
    };
    primeiroValor.innerHTML = digitePrimeiroValor;
    segundoValor.innerHTML = digiteSegundoValor;
    mudancaIcone.innerHTML = '/';
    resultadoValor.innerHTML = dividir(digitePrimeiroValor, digiteSegundoValor);
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

