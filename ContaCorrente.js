import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    //Atributos privados
    _cliente;
    _saldo = 0;

    /**
     * @param {any} novoValor
     */
    set cliente(novoValor){

        if(novoValor instanceof Cliente) {
           this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    sacar(vlrSacado){
        if(vlrSacado <= this._saldo){
            this._saldo -= vlrSacado;
            console.log(`¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`);
            console.log(`Valor sacado ${vlrSacado}`);
            console.log(`Saldo ${this._saldo}`);
            console.log(`¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`);
            return vlrSacado;
        }else{
            console.log(`Valor ${vlrSacado} é maior que saldo, ${this._saldo}`);
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(`¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`);
            console.log(`Valor Depositado ${valor}`);
            console.log(`Saldo ${this._saldo}`);
            console.log(`¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`);
            return valor;
        }else{
            console.log(`Valor ${valor} é permitido para deposito`);
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}