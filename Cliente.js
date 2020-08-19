export class Cliente {                // criando class
    nome;                      // atributos
    rg;
    _cpf;
    endereco;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this.rg = rg;
    }
}