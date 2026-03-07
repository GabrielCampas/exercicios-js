import MeuArray from "../teoria/meuArray.js";

const tarefas = new MeuArray();

// Adicionando cinco tarefas ao Array
tarefas.adicionar("Revisar relatório.");
tarefas.adicionar("Preparar apresentação.");
tarefas.adicionar("Responder e-mails pendentes.");
tarefas.adicionar("Agendar reunião.");
tarefas.adicionar("Atualizar documentos.");

// Exibindo todas as tarefas armazenadas
console.log("Lista de tarefas:");
for (let i = 0; i < tarefas.tamanhoArray(); i++) {
    console.log(`${i + 1}. ${tarefas.obterElemento(i)}`);
}

// Removendo a última tarefa
const tarefaRemovida = tarefas.remover();
console.log(`\n--- Tarefa removida: "${tarefaRemovida}" ---\n`);

// Lista de tarefas atualizada
console.log("Lista de tarefas:");
for (let i = 0; i < tarefas.tamanhoArray(); i++) {
    console.log(`${i + 1}. ${tarefas.obterElemento(i)}`);
}

// Exibindo todas as tarefas restantes
console.log(" ")
console.log(`- Total de tarefas agora: ${tarefas.tamanhoArray()} tarefas.`);