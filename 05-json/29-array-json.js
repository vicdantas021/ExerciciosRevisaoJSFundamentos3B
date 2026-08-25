// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
    {id:20, descricao:"Varrer casa", concluida: true},
    {id:21, descricao:"Fazer lição de casa", concluida: false},
    {id:22, descricao:"Dobrar roupa", concluida: false},
]

const json = JSON.stringify(tarefas);
console.log(json);