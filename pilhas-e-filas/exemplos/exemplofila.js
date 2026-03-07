import Fila from "../fila.js";

const minha_var = new Fila();

// adicionando clientes a fila
minha_var.enqueue("Cliente 1.");
minha_var.enqueue("Cliente 2.");
minha_var.enqueue("Cliente 3.");
minha_var.enqueue("Cliente 4.");

console.log(`\nSaída "Cliente 1.": ${minha_var.front()}`); // Saída: "Cliente 1."
console.log(`\nSaída "Cliente 2.": ${minha_var.dequeue()}`); // Saída: "Cliente 2."
console.log(`\nSaída "Cliente 3.": ${minha_var.dequeue()}`); // Saída: "Cliente 3."
console.log(`\nSaída será "Cliente 3.": ${minha_var.front()}`); // Saída: "Cliente 3."

// Saída: 2 ("Cliente 3" e "Cliente 4." ainda estão na fila)
console.log(`\nMostrando o número de elementos na fila: ${minha_var.tamanho()}`);
