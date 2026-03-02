import MeuArray from "./meuArray.js";

const variavel = new MeuArray();

variavel.adicionar(10);
variavel.adicionar(20);
variavel.adicionar(30);
console.table(variavel.verItens());

console.log(variavel.obterElemento(1)); // Saída: 20
console.log(variavel.tamanhoArray()); // Saída: 3

// Saída: 30 (Remove o último elemento)
console.log(variavel.remover());
console.log(variavel.tamanhoArray()); // Saída: 2
console.log(variavel.verItens());