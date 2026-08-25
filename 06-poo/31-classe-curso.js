// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso {
    constructor(nome, duracao, modalidade){
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade;
    }
    exibirInformacoes(){
        console.log(`Nome: ${this.nome}, Duração: ${this.duracao}`);
    }
}

const cursos = new Curso ("Desenvolvimento de Sistemas", "2 anos", "Presencial")
cursos.exibirInformacoes()
const cursos1 = new Curso ("Metalurgia", "2 anos", "Presencial")
cursos1.exibirInformacoes()
