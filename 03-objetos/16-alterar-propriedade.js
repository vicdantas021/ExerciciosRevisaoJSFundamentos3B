// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const ingresso = {
    evento: "Show da Laufey",
    preco: 370,
    quantidade: 6700
}
console.log(ingresso)

ingresso.preco = 350;
ingresso.quantidade = 6698;
console.log(ingresso)