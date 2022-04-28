const Carton =  require("./carton.js")
const CARTON_LENGHT = 12;
const CARTON_MAX = 99;

class Bingo {
    constructor(cantCartones){
        this.numerosMarcados = [];
        this.cartones = [];
        for (let i = 0; i < cantCartones; i++)
            this.cartones.push(new Carton());
        this.ultimaLlamada = new Date();
    }
    sacarNumero(){
        this.ultimaLlamada = new Date();
        let numero;
        do
            numero =  Math.round(Math.random() * CARTON_MAX);
        while (this.numerosMarcados.includes(numero))
        this.cartones.forEach(carton => carton.mark(numero));
        this.numerosMarcados.push(numero);
        
        return {
            numero,
            gandor: this.cartones.reduce((prev, curr) => { if (curr.gandor) return curr.name }, undefined)
        };
    }
    getCarton(name){
        let carton;
        for (let carton of this.cartones)
            if (carton.name === name) return carton
        for (let carton of this.cartones)
            if (!carton.name){
                carton.name = name;
                return carton
            }
    }
    get cartonesNum(){
        this.ultimaLlamada = new Date();
        return this.cartones.map(carton => carton.numbers);
    }
}

module.exports = Bingo;