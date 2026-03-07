// Classe base
class Animal {
    constructor(nome) {
        this.nome = nome; // atributo
    }

    fazerSom() { // método genérico
        console.log("O animal faz um som...");
    }
}

// Subclasse
class Cachorro extends Animal {
    fazerSom() { // Polimorfismo (sobrescrevendo o método) 
        console.log("Au au!");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Miau!");
    }
}

// Criando objetos
const dog = new Cachorro("Rex");
const cat = new Gato("Mimi");

console.log(" ");

dog.fazerSom();
cat.fazerSom();

console.log(" ");
console.log("-----------------------------------------------------");
console.log(" ");

class ContaBancaria {
    #saldo = 0; // Atributo privado

    depositar(valor) {
        this.#saldo += valor;
    }

    verSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.verSaldo()); // 100
//console.log(conta.#saldo); Erro! Não pode acessar diretamente.

console.log(" ");
console.log("-----------------------------------------------------");
console.log(" ");

class Pessoa {
    static especie = "Humano"; // Atributo estático
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Oi, eu sou ${this.nome} e sou um ${Pessoa.especie}.`);
    }
}

const p1 = new Pessoa("Ana");
p1.apresentar();
console.log(Pessoa.especie);

console.log(" ");
console.log("-----------------------------------------------------");
console.log(" ");

class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        console.log(`${this.modelo} está acelerando...`);
    }
}

// exportando a classe (CommonJS)
//module.exports = Carro;

//importando a classe (CommonJS)
//const Carro = require ('./Carro.js');

const meuCarro = new Carro("Fusca", 1970);
meuCarro.acelerar();

// Declara e exporta a classe com ES Modules
// export default class Carro {
//constructor(modelo, ano){
//this.modelo = modelo;
//this.ano = ano;
//}

//acelerar(){
//console.log(`${this.modelo} está acelerando...`);
//}
//}

// Importando a classe com ES Modules
// import Carro from "./Carro.js";

console.log(" ");
console.log("-----------------------------------------------------");
console.log(" ");

