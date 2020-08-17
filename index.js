import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente(); //instanciando objeto
cliente1.nome = 'Erickson';
cliente1.cpf = '02838904108';
const CCErickson = new ContaCorrente();
CCErickson.agencia = 1001;
CCErickson.cliente = cliente1.nome;
cliente1.rg =1850580

const cliente2 = new Cliente(); // operador new
cliente2.nome = "Alice";
cliente2.cpf = '72919473670';
const CCAlice = new ContaCorrente();
CCAlice.agencia = 1001;
CCErickson.depositar(500)

CCErickson.depositar(100);
CCErickson.depositar(-1)
CCErickson.sacar(49.10);
console.log(CCErickson)
CCAlice.cliente = cliente2;
CCErickson.transferir(2000, CCAlice)

console.log(CCAlice)