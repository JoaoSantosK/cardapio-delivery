export class Pedido {
    constructor() {
        this.size = null;
        this.flavors = {};
        this.dough = null;
        this.border = null;
        this.drinks = {};
        this.prices = {
            Pequeno: 25,
            Médio: 35,
            Grande: 45,
            "Família": 55,
            "Super Família": 65
        };
        this.drinksPrice = {
            "Coca-Cola": 5,
            "Pepsi": 5,
            "Guaraná Antarctica": 4,
            "Suco de laranja" : 6
        };
    }

    setSize(size) {
    if (!this.prices[size]) {
        console.warn("Tamanho inválido.");
        return;
    }

    this.size = size;

    const max = this.getMaxFlavors();

    let total = Object.values(this.flavors)
        .reduce((acc, val) => acc + val, 0);

    if (total > max) {
        const ordered = Object.entries(this.flavors);

        this.flavors = {};
        let count = 0;

        for (let [name, qty] of ordered) {
            for (let i = 0; i < qty; i++) {
                if (count < max) {
                    if (!this.flavors[name]) this.flavors[name] = 0;
                    this.flavors[name]++;
                    count++;
                    }
                }
            }
        }
    }

    setFlavors(flavor) {
        if (!this.size) {
            console.warn("Selecione um tamanho primeiro.");
            return;
        }

        const max = this.getMaxFlavors();

        const total = Object.values(this.flavors)
            .reduce((acc, val) => acc + val, 0);

        if (total >= max) {
            console.warn(`Máximo de ${max} sabores permitido.`);
            return;
        }

        if (this.flavors[flavor]) {
            this.flavors[flavor]++;
        } else {
            this.flavors[flavor] = 1;
        }
    }

    setDough(dough) {
        this.dough = dough;
    }

    setBorder(border) {
        this.border = border;
    }

    setDrinks(drinks) {
        if (this.drinks[drinks]) {
        this.drinks[drinks]++;
        } else {
        this.drinks[drinks] = 1;
        }
    }

    getSize() {
        return this.size;
    }

    getFlavors() {
        return this.flavors;
    }

    getDough() {
        return this.dough;
    }

    getBorder() {
        return this.border;
    }

    getDrinks() {
        return this.drinks;
    }

    getDrinksPrice() { // Fazer getDrinksPrice funcionar para retornar o valor das bebidas no getResumo
        return this.drinksPrice;
    }

    getPrice() {
        let total = 0;

        if (!this.size) return 0;
            total += this.prices[this.size] || 0;

        return total;
    }

    getResumo() {
        return {
            size: this.size,
            flavors: this.flavors,
            dough: this.dough,
            border: this.border,
            drinks: this.drinks,
            total: this.getPrice()
        }
    }

    getMaxFlavors() {
        if (this.size === "Super Família") return 4;
        if (this.size === "Família") return 3;
        else return 2;
    }

    isValid() {
        return this.size !== null && Object.keys(this.flavors).length > 0;
    }

    reset() {
        this.size = null;
        this.flavors = {};
        this.drinks = {};
        this.dough = null;
        this.border = null;
    }

    finalizar() {
        if (!this.isValid()) {
            console.warn("Pedido incompleto.");
            return false;
        }

        const resumo = {
            size: this.size,
            flavors: this.flavors,
            dough: this.dough,
            border: this.border,
            drinks: this.drinks,
            total: this.getPrice(),
        };

        localStorage.setItem("pedido", JSON.stringify(resumo));
        return true;
    }
}