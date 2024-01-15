class Card {
    #goods;

    constructor() {
        this.#goods = [];
    }

    get goods() {
        return this.#goods;
    }

    add(good) {
        this.#goods.push(good);
    }

    getTotal() {
        let sum = 0;
        this.#goods.forEach(g => sum += g);
        return sum;
    }
}

let myCard = new Card();
myCard.add(15);
myCard.add(34);
myCard.add(65);
console.log(myCard.goods);
console.log(myCard.getTotal());