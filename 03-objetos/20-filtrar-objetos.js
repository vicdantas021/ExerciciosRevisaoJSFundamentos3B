// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionários = [
    {nome: "Roseli", salario: 3500},
    {nome: "Juliana", salario: 2800},
    {nome: "Celso", salario: 4000},
    {nome: "Mônica", salario: 2000},
    {nome: "Douglas", salario: 2000}
]

const salarioFiltrado = funcionários.filter((valor) => valor.salario >= 3000)
console.log(salarioFiltrado)