// EXERCÍCIO 25 - REST PARAMETERS
// Crie uma função maiorNumero que receba uma quantidade indefinida de números
// utilizando Rest. A função deve retornar o maior valor recebido.
// Teste com pelo menos seis números.
//
// Escreva sua solução abaixo:

function maiorNumero (...numero) {
    return numero.reduce((atual, numero) => atual > numero ? atual: numero)
}

console.log(maiorNumero(10, 20, 30, 40, 50, 60));