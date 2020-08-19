import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import {Endereco} from './Endereco.js'

const cliente1 = new Cliente('Erickson', "02838904108", 1850580); //instanciando objeto
const cliente2 = new Cliente("Alice", 72919473670 ); // operador new

const CCErickson = new ContaCorrente(1001, cliente1);
const CCAlice = new ContaCorrente(1000, cliente2);

const ClienteEndereco = new Endereco();
ClienteEndereco.rua = "eduardo Peres";
ClienteEndereco.bairro = "JD. Nhanha";
ClienteEndereco.cidade = "Campo Grande";
ClienteEndereco.UF = "MS";
ClienteEndereco.pais = "Brasil";

cliente2.endereco = ClienteEndereco;

CCErickson.depositar(500)
CCErickson.depositar(100);
CCErickson.depositar(-1)
CCErickson.sacar(49.10);
CCErickson.transferir(200, CCAlice)

console.log(CCErickson)
console.log(CCAlice)

console.log(ContaCorrente.nContas)