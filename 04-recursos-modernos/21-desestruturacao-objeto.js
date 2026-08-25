// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const viagem = {destino: "Tóquio", dias: 10, valor: 20000}

const {destino, dias, valor} = viagem;

console.log(destino, dias, valor)
