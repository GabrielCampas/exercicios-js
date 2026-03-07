export default class MeuArray {

    // Atributo privado, usamos uma lista para armazenar os itens do array
    #items = [];

    // Mantemos o controle do tamanho do array (qnt de itens)
    #tamanho = 0;

    constructor() {
        console.log("MeuArray criado!");
    }

    // Adicionando elemento ao array
    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento;

        this.#tamanho++;
    }

    // Remove o último elemento do array
    remover() {

        // Se o array estiver vazio, não há o que remover (undefined)
        if (this.#tamanho === 0) {
            return undefined;
        }

        // Armazena o último item do array
        const ultimoItem = this.#items[this.#tamanho - 1];

        // Remove o último item do array
        delete this.#items[this.#tamanho - 1];

        // Decrementa o tamanho
        this.#tamanho--;

        return ultimoItem; //Retorna o item removido para visualizar
    }

    // Acessa o elemento em um índice específico
    obterElemento(indice) {
        if (indice < 0 || indice >= this.#tamanho) {

            // Se o índice estiver fora do alcance, retorna undefined
            return undefined;
        }

        // Retorna o item no índice solicitado
        return this.#items[indice];
    }

    // Retorna o tamanho do array
    tamanhoArray = () => this.#tamanho;

    // Retorna todos os itens do array
    verItens() {
        return this.#items;
    }

    // Remove todos o s elementos do array
    limpar() {
        // Limpa o vetor
        this.#items = [];

        // Reinicializa o tamanho
        this.#tamanho = 0;
    }

    editar(indice, novoValor) { }

    obterIndice(valor) { }
}