import Bau from "./bauexercicio2.js";

// Introduçao
console.log(`\nBaú de Tesouros do Barbarruiva.`);
console.log(" ");

// adicionando tesouros
const tesouro = new Bau();

tesouro.guardar("Barra de ouro");
tesouro.guardar("Espada");
tesouro.guardar("Diamante");

// tirando ultimo tesouro guardado
console.log(`${tesouro.retirar()}`);

// olhando último tesouro
console.log(`Agora o último tesouro é: ${tesouro.olhar()}`);

// vendo se está vazio
console.log(tesouro.verificar());