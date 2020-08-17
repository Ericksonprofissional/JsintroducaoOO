class Cliente {                // criando class
    nome;                      // atributos
    cpf;
    rg;
}

class ContaCorrente{
    _agencia;
    _saldo = 0;

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
}

const cliente1 = new Cliente(); //instanciando objeto
cliente1.nome = 'Erickson';
cliente1.cpf = '02838904108';
const CCErickson = new ContaCorrente();
CCErickson.agencia = 1001;
cliente1.rg =1850580

const cliente2 = new Cliente(); // operador new
cliente2.nome = "Alice";
cliente2.cpf = '72919473670';
const CCAlice = new ContaCorrente();
CCAlice.agencia = 1001;


CCErickson.depositar(100);
CCErickson.depositar(-1)
CCErickson.sacar(49.10);
console.log(cliente1)

console.log(cliente2)
