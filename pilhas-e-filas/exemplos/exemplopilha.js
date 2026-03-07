import MinhaPilha from "../pilha.js";

// Exemplo de uso
const minha_var = new MinhaPilha();

minha_var.adicionar("A");
minha_var.adicionar(20);
minha_var.adicionar(30);

// Saída: 30 (elemento no topo)
console.log(`\nEsse elemento está no topo: `);
console.log(minha_var.topo());

// Saída 30 (remove o elemento do topo)
console.log(`\nEsse elemento foi removido do topo: `);
console.log(minha_var.remover());

// Saída 20 (agora o topo é 20)
console.log(`\nO topo agora é: `);
console.log(minha_var.topo());

// Saída: 2 (dois elementos restantes)
console.log(`\nElementos restantes:`);
console.log(minha_var.tamanhoPilha());