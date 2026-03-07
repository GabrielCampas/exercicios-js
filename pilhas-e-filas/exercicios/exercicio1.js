import MinhaPilha from "../pilha.js";

// -- Incompleto --

// Introduçao
console.log(`\nTorre de Feitiços.`);

const feitico = new MinhaPilha();
//const leia = require('readline-sync');

// Feitiços da pilha
feitico.adicionar("Bola de Fogo");
feitico.adicionar("Contra-feitiço");
feitico.adicionar("Maldição");
feitico.adicionar("Cura");

// Mostrando feitiços
console.table(feitico.tabela());

// Removendo feitiço do topo
feitico.remover();
console.log(`\nO feitiço "${feitico.remover(4)}" foi guardado em outra torre!`);

console.table(feitico.tabela());

// Vendo qual feitiço está no topo sem remover
console.log(`Agora o feitiço do topo é: ""!`);

// verificando se não existem mais feitiços na pilha
if (feitico){

}