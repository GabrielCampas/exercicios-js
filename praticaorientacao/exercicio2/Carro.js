export default class Carro {
    constructor(modelo, ano, velocidade){
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }

    acelerar(){
        this.velocidade += 10;
        console.log(`[Acelerar] ${this.modelo} está a ${this.velocidade} km/h.`)
    }

    frear(){
        this.velocidade = Math.max(0, this.velocidade - 5);
        console.log(`[Frear] ${this.modelo} freou e reduziu para ${this.velocidade} km/h.`)
    }
}