import MinhaPilha from "../pilha.js";

// Introduçao
console.log(`==== Torre de Feitiços. ====`);

const feitico = new MinhaPilha();
//const leia = require('readline-sync');

// Feitiços da pilha
feitico.adicionar(`Bola de Fogo`);
feitico.adicionar(`Contra-Feitiço`);
feitico.adicionar(`Maldição`);
feitico.adicionar(`Cura`);

// Mostrando feitiços
console.table(feitico.tabela());

// caso esteja vazio
if (feitico.estaVazio()){
    console.log(`A torre está vazia.`);
    // termina a execução
    process.exit(1);
} else {
    console.log(`Ainda restam ${feitico.tamanhoPilha()} feitiços na torre.`);
}

// Removendo feitiço do topo
const removido = feitico.remover();
console.log(`O feitiço "${removido}" foi guardado em outra torre!`);

// Vendo qual feitiço está no topo sem remover
console.log(`\nAgora o feitiço do topo é: "${feitico.topo()}"!`);

console.table(feitico.tabela());