// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    {matricula:101, nome: "Yuri"},
    {matricula:102, nome: "Evellyn"},
    {matricula:103, nome: "Victória"},
    {matricula:104, nome: "Fernanda"},
]

const encontrarAluno = alunos.find((alunos) => alunos.matricula === 103);
console.log(encontrarAluno)