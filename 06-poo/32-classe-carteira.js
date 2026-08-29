// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital{
    #saldo = 0;

    adicionarCredito(valor){
        if(valor >0) this.#saldo += valor;
    };

    realizarPagamento(valor){
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

const carteira = new CarteiraDigital();

console.log(`Saldo inicial: ${carteira.consultarSaldo()}`); 
carteira.adicionarCredito(100);
console.log(`Saldo após depósito: ${carteira.consultarSaldo()}`);

const pagamento1 = carteira.realizarPagamento(40);
console.log(`Saldo atual: ${carteira.consultarSaldo()}`); 

const pagamento2 = carteira.realizarPagamento(100);
console.log(`Saldo final: ${carteira.consultarSaldo()}`); 
