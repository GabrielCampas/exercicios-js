import Atendimento from "./filaatendimento.js";

const constante = new Atendimento();

// adicionando clientes à fila
constante.enqueue(`Cliente 1`);
constante.enqueue(`Cliente 2`);
constante.enqueue(`Cliente 3`);
constante.enqueue(`Cliente 4`);

