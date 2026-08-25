// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie um array de convidados da família e outro de amigos.
// Utilize Spread para criar um terceiro array contendo todos os convidados.
//
// Escreva sua solução abaixo:

const convFamilia = [ "Laura", "Felipe", "Amanda", "Manuela" ]

const convAmigos = [ "Fernanda", "Yuri", "Julia", "Sabrina" ] 
const todosConvidados = [...convAmigos, ...convFamilia];

console.log(todosConvidados)