export class Pedido {
    constructor() {
        this.size = null;
        this.flavor = null;
        this.tborder = null;
        this.border = null;
        this.drink = null;
        this.prices = {
            Pequeno: 25,
            Médio: 35,
            Grande: 45,
            "Família": 55,
            "Super Família": 65
        };
    }

    setSize(size) {
        if (!this.prices[size]) {
            console.warn("Tamanho inválido.");
            return;
        }
        this.size = size;
    }

    setFlavor(flavor) {
        this.flavor = flavor;
    }

    setTypeBorder(tborder) {
        this.tborder = tborder;
    }

    setBorder(border) {
        this.border = border;
    }

    setDrink(drink) {
        this.drink = drink;
    }

    getSize() {
        return this.size;
    }

    getFlavor() {
        return this.flavor;
    }

    getTypeBorder() {
        return this.tborder;
    }

    getBorder() {
        return this.border;
    }

    getDrink() {
        return this.drink;
    }

    getPrice() {
        if (!this.size) return 0;
        return this.prices[this.size];
    }

    getResumo() {
        return {
            size: this.size,
            flavor: this.flavor,
            tborder: this.tborder,
            border: this.border,
            drink: this.drink,
            total: this.getPrice()
        }
    }

    isValid() {
        return this.size !== null && this.flavor !== null;
    }

    reset() {
        this.size = null;
        this.flavor = null;
        this.drink = null;
        this.tborder = null;
        this.border = null;
    }

    finalizar() {
        if (!this.isValid()) {
            console.warn("Pedido incompleto.");
            return false;
        }

        const resumo = {
            size: this.size,
            flavor: this.flavor,
            borderType: this.tborder,
            border: this.border,
            drink: this.drink,
            total: this.getPrice()
        };

        localStorage.setItem("pedido", JSON.stringify(resumo));
        return true;
    }
}
