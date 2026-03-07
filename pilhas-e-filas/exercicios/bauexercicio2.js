export default class Bau {
    #items = [];
    #quantidade = 0;

    // guardando item no bau
    guardar(elemento) {
        // items recebe quantidade de tesouro
        this.#items[this.#quantidade] = elemento;

        // aumenta a quantidade
        this.#quantidade++;
    }

    // tirando item do bau
    retirar() {
        // se não tiver itens
        if (this.#quantidade === 0) {
            return "\nNão há tesouros no baú.";
        }

        // guardando último tesouro adicionado pra retornar
        const ultimoTesouro = this.#items[this.#quantidade - 1];

        // removendo o ultimo item e diminuindo contador
        this.#items[this.#quantidade - 1] = undefined;
        this.#quantidade--;
        
        // retornando apenas o item da última posição
        return `Barbarruiva retirou ${ultimoTesouro}`
    }

    // olhando itens no bau sem pegar
    olhar() {
        if (this.#quantidade === 0) return "\nO baú está vazio.";
        // retornando apenas o último item do bau ()
        return this.#items[this.#quantidade - 1];
    }

    // saber se esta vazio
    verificar() {
        console.log(`O baú está...`)
        if (this.#quantidade === 0) {
            console.log("Vazio.");
        }

        return `Preenchido com ${this.#quantidade} itens.`;
    }
}