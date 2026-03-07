export default class Atendimento {
    // clientes entram na fila e são atendidos em ordem de chegada
    // a cada iteração um cliente deve ser removido da fila e exibido no console
    // novos clientes podem ser adicionados aleatoriamente

    // indice do inicio da fila
    #inicio = 0;

    // indice do fim da fila
    #final = 0;

    // lista pra armazenar clientes
    #clientes = [];

    // funcao de fila vazia
    // verifica se a fila está vazia
    vazia(){ 
        this.#final === this.#inicio;
    }

    // funcao do tamanho da fila
    // calcula o diferença entre final e inicio
    tamanhofila(){
        this.#final - this.#inicio;
    }

    // adicionando ao final da fila
    enqueue(pessoa){
        // colocando a pessoa no final da fila
        this.#clientes[this.#final] = pessoa;

        // incrementando o indice do fim da fila
        this.final++;
    }

    // mostrando o primeiro da fila sem remove-lo
    front(){
        // caso fila esteja vazia
        if (this.vazia()){
            return `Não tem ninguém na fila.`;
        }

        // retornando o primeiro cliente
        return this.#clientes[this.#inicio];
    }

    // removendo o primeiro da fila
    dequeue(){
        // obtendo o primeiro elemento
        const cliente = this.#clientes[this.#inicio];

        // removendo o cliente do inicio da fila
        delete this.#clientes[this.#inicio];

        // movendo o indice pro proximo da fila
        this.#inicio++;

        // quando o final e inicio estiverem alinhados, reinicia a fila
        if (this.#inicio === this.#final) {
            this.#inicio = 0;
            this.#final = 0;
        }

        // retornando o cliente removido
        return cliente;
    }
}