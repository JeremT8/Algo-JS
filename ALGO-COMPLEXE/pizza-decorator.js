class Pizza {
	getPrice() {
		return 5
	}

	getDescription() {
		return "Pizza"
	}
}

class WithExtraCheese {
	constructor (pizza) {
		this.pizza = pizza;
	}

	getPrice() {
		return this.pizza.getPrice() + 4;
	}

	getDescription() {
		return this.pizza.getDescription() + " avec supplément fromage";
	}
}

const p = new WithExtraCheese(new Pizza());

console.log(p.getPrice(), p.getDescription());