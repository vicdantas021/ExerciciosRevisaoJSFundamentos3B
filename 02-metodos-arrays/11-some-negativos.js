// EXERCÍCIO 11 - SOME - VALORES NEGATIVOS
// Considere os saldos: [120, 50, -20, 300, 75].
// Utilize some() para verificar se existe algum saldo negativo.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const saldo = [120, 50, -20, 300, 75];

const saldoNegativo = saldo.some((saldo) => saldo <= -1)
console.log("Existe algum slado negativo?" +  saldoNegativo)