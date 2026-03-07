export default class Fila{
    // Usamos uma lista pra armazenar itens
    #items = [];

    // repesenta o indice do inicio da fila
    #inicio = 0;

    // representa o indice do fim da fila
    #fim = 0;

    // adiciona um elemento ao final da fila (enqueue)
    enqueue(elemento){
        // coloca o elemento no fim da fila
        this.#items[this.#fim] = elemento;
        
        // incrementa o indice do fim da fila
        this.#fim++;
    }

    // remove e retorna o primeiro elemento da fila (dequeue)
    dequeue(){
        // se a fila estiver vazia, retorna undefined
        if (this.estaVazia()){
            return undefined;
        }

        // obtem o primeiro elemento
        const item = this.#items[this.#inicio];

        // remove o item do inicio da fila
        delete this.#items[this.#inicio];

        // move o indice do inicio pro proximo item
        this.#inicio++;

        // quando o inicio e o fim estiverem alinhados, redefine a fila
        if (this.#inicio === this.#fim){
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item; // retorna o item removido
    }

    // retorna o primeiro elemento da fila sem remove-lo (peek)
    front(){
        // se a fila estiver vazia, retorna undefined
        if (this.estaVazia()){
            return undefined
        }

        // retorna o primeiro elemento
        return this.#items[this.#inicio];
    }

    // limpa a fila
    limpar(){
        this.#items = {};
        this.#inicio = 0;
        this.#fim = 0;
    }

    // verifica se a fila esta vazia
    // verifica se os indices estao iguais
    estaVazia = () => this.#fim === this.#inicio;

    // retorna o tamanho da fila
    // calcula a diferença entre fim e inicio
    tamanho = () => this.#fim - this.#inicio;
}