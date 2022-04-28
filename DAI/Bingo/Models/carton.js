const CARTON_LENGHT = 12;
const CARTON_MAX = 99;

class Carton {
    constructor() {
        this.tiles = [];
        
        Array(CARTON_LENGHT)
            .fill()
            .forEach(_ => {
                this.tiles.push({
                    number: Math.round(Math.random() * CARTON_MAX),
                    marked: false,
                })
            })
    }
    get numbers() {
        return this.tiles.map(tile => tile.number);
    }
    get markedNumbers() {
        return this.tiles.filter(tile => tile.marked).map(tile => tile.number);
    }
    get unmarkedNumbers() {
        return this.tiles.filter(tile => !tile.marked).map(tile => tile.number);
    }
    get ganador(){
        for (tile of this.tiles) 
            if (!tile.marked)
                return false
        return true
    }
    mark(number) {
        this.tiles.forEach(tile =>{
            if (tile.number === number)
                tile.marked = !tile.marked;
        })
    }
}

module.exports = Carton;