import Atendimento from "./atendimentoexercicio1fila.js";
// clientes entram na fila e são atendidos em ordem de chegada
// a cada iteração um cliente deve ser removido da fila e exibido no console
// novos clientes podem ser adicionados aleatoriamente

const fila = new Atendimento();

// Introdução
console.log(`\n=== Fila de atendimento ao cliente. ===`)
// adicionando clientes à fila
fila.enqueue(`Cliente 1`);
fila.enqueue(`Cliente 2`);
fila.enqueue(`Cliente 3`);
fila.enqueue(`Cliente 4`);

// clientes entrando na fila em ordem de chegada
console.log(`\nOs clientes chegaram: ${fila.filaCompleta()}.`);

// atendendo o primeiro e designando tempo pra ele
console.log(`- Atendendo o ${fila.front()}.`);

// gerando delay e mostrando
fila.tempoDoAtendimento();

/* 
- Tentei usar for -> o laço for não espera o settimeout() acabar então o resto do código sai atropelando o contador de delay, que deixa tudo zoado no console. 

- Tentei repetir as linhas -> Se só repetir as linhas 17, 20 e 23, também acontece a mesma coisa.

esse foi o máximo que consegui sem ter que usar o conceito de async
*/

