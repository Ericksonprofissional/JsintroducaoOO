import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static nContas =0;
    agencia;
    //Atributos privados
    _saldo = 0;
    _cliente;

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


    constructor(agencia, cliente){
        this.agencia =agencia;
        this.cliente =cliente;
        ContaCorrente.nContas +=1;
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