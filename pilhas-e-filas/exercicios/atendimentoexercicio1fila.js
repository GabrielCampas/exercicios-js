export default class Atendimento {
    // indice do inicio da fila
    #inicio = 0;

    // indice do fim da fila
    #final = 0;

    // lista pra armazenar clientes
    #clientes = [];

    // funcao de fila vazia
    // verifica se a fila está vazia
    vazia() {
        return this.#final === this.#inicio;
    }

    // funcao do tamanho da fila
    // calcula o diferença entre final e inicio
    tamanhofila() {
        this.#final - this.#inicio;
        let restante = this.#final - this.#inicio;

        // exibindo indice dos clientes
        return restante;
    }

    // adicionando ao final da fila
    enqueue(pessoa) {
        // colocando a pessoa no final da fila
        this.#clientes[this.#final] = pessoa;

        // incrementando o indice do fim da fila
        this.#final++;
    }

    // mostarndo a fila inteira
    filaCompleta() {
        // filtrando o array pra retornar apenas os clientes
        return this.#clientes.filter(cliente => cliente !== undefined);
    }

    // mostrando o primeiro da fila sem remove-lo
    front() {
        // caso fila esteja vazia
        if (this.vazia()) {
            return `Não tem ninguém na fila.`;
        }

        // retornando o primeiro cliente
        return this.#clientes[this.#inicio];
    }

    // removendo o primeiro da fila
    dequeue() {
        // caso fila esteja vazia
        if (this.vazia()) {
            return `Não tem ninguém na fila.`;
        }

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
            this.#clientes = []; // <- limpa o array
        }

        // retornando o cliente removido
        return cliente;
    }

    // === desafio usando math.random e settimeout ===

    // gerando tempo aleatório de atendimento
    gerandoDelay(min = 1, max = 5) {
        // math.random() gera um decimal entre 0 e 1. Ele é multiplicado pela diferença do intervalo + 1 para incluir valor máx. No final soma o minimo para deslocar o resultado para o ponto inicial desejado
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    tempoDoAtendimento() {
        if (this.vazia()) {
            return console.log(`Não tem ninguém na fila.`);
        }

        const cliente = this.front(); // vendo quem é o primeiro da fila
        const tempo = this.gerandoDelay();

        console.log(`O atendimento de ${cliente} levará ${tempo} segundos...`);

        // usando settimeout
        setTimeout(() => {
            this.dequeue(); // remove o cliente da fila
            console.log(`O atendimento de ${cliente} foi concluído.`);

            // dando dequeue e mostrando a fila atualizada
            console.log(`O ${cliente} foi embora! Agora, a fila tem ${this.tamanhofila()} clientes (${this.filaCompleta()}).`);
        }, tempo * 1000);
    }
}