class Cliente {                // criando class
    nome;                      // atributos
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente(); //instanciando objeto
const cliente2 = new Cliente();



cliente1.nome = 'Erickson';
cliente1.cpf = '02838904108';
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg =1850580

cliente2.nome = "Alice";
cliente2.cpf = '72919473670';
cliente2.agencia = 1001;
cliente2.saldo = 10;

console.log(cliente1, cliente2
)