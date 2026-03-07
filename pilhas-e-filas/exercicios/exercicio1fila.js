import Atendimento from "./filaatendimento.js";
// clientes entram na fila e são atendidos em ordem de chegada
// a cada iteração um cliente deve ser removido da fila e exibido no console
// novos clientes podem ser adicionados aleatoriamente

const fila = new Atendimento();

// Introdução
console.log(`\nFila de atendimento ao cliente.`)
// adicionando clientes à fila
fila.enqueue(`Cliente 1`);
fila.enqueue(`Cliente 2`);
fila.enqueue(`Cliente 3`);
fila.enqueue(`Cliente 4`);

// clientes entrando na fila em ordem de chegada
console.log(`\nOs clientes chegaram: ${fila.filaCompleta()}.`);

// iterando e removendo clientes

