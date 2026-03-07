import MeuArray from "../teoria/meuArray.js";

const funcionarios = new MeuArray();

// Adicionando cinco funcionarios ao array
funcionarios.adicionar("Bruno");
funcionarios.adicionar("Lucas");
funcionarios.adicionar("Pedro");
funcionarios.adicionar("Thiago");
funcionarios.adicionar("Carlos");

// Exibindo lista do nome dos funcionários
for (let i = 0; i < funcionarios.tamanhoArray(i); i++){
    console.log(`${i + 1}. ${funcionarios.obterElemento(i)}`)
}

// Obtendo o nome do terceiro funcionario do array
console.log(`- O terceiro funcionário é: ${funcionarios.obterElemento(2)}`);