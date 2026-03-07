export default class MinhaPilha {
    // Usando lista pra armazenar elementos da pilha
    #items = [];

    // Mantendo controle do tamanho da pilha
    #tamanho = 0;

    // Adicionado elemento na posição atual do tamanho
    adicionar(elemento) {
        // Insere o elemento na posição atual do tamanho
        this.#items[this.#tamanho] = elemento;

        // Incrementa o tamanho
        this.#tamanho++;
    }

    remover() {
        // Se a pilha estiver vazia, retorna undefined
        if (this.#tamanho === 0) {
            return undefined;
        }

        // Pega o item no topo da pilha
        const ultimoItem = this.#items[this.#tamanho - 1];

        // Remove o último item do topo
        delete this.#items[this.#tamanho - 1];

        // Decrementa o tamanho da pilha
        this.#tamanho--;

        // Retorna o item removido
        return ultimoItem;
    }

    // Retorna elemento do topo sem remove-lo
    topo() {
        // Se a pilha estiver vazia, retorna undefined
        if (this.#tamanho === 0) {
            return undefined;
        }

        // Retorna o item no topo
        return this.#items[this.#tamanho - 1];
    }

    // Limpa a pilha
    limpar() {
        // reseta os items
        this.#items = [];

        // reinicializando o tamanho
        this.#tamanho = 0;
    }

    // verifica se a pilha está vazia
    // verifica se o tamanho da pilha é zero
    estaVazio = () => this.#tamanho === 0;

    // retorna o número de elementos na pilha
    tamanhoPilha = () => this.#tamanho;
    
    tabela = () => this.#items;
}