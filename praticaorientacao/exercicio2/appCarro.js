import Carro from "./Carro.js";

const meuCarro = new Carro("Supra MK4", 2025);
const adversario = new Carro("Lamborghini Huracan", 2023);

console.log(`--- Início da Corrida: ${meuCarro.modelo}, ano ${meuCarro.ano} contra ${adversario.modelo}, ano ${adversario.ano}! ---`);

console.log(" ");
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.frear();

console.log(" ");

adversario.acelerar();
adversario.acelerar();
adversario.acelerar();
adversario.frear();

console.log(" ");
console.log(`--- Fim da corrida. Velocidades finais: ---`);
console.log(`1. ${meuCarro.modelo}, ano ${meuCarro.ano}: ${meuCarro.velocidade}`);
console.log(`2. ${adversario.modelo}, ano ${adversario.ano}: ${adversario.velocidade}`);