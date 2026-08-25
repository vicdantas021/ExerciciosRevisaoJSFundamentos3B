// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades, status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
        status: true, 
        quantidade: 40, 
        cliente: [
            {nome: "Yuri"},
            {nome: "Vick"}
        ]
    
}

console.log(resposta.status);
const clientes = resposta.cliente


clientes.forEach(a =>{    
        console.log(a.nome)    
})