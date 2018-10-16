class Pokemon {
	constructor(number, name, size, weight, type, level = 3) {
		this.number = number;
		this.name = name;
		this.size = size;
		this.weight = weight;
		this.level = level;

		this.yell();
	}

	yell() {
		console.log(`•••••• ${this.name.toUpperCase()}`);
	}
}

module.exports = Pokemon;