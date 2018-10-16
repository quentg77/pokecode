const fs = require('fs');

let dumpPath = '../data/log/';

class Pokemon {
	constructor({number, name, size, weight, type, level = 3, attacks}, is_yelling) {
		this.number = number;
		this.name = name;
		this.size = size;
		this.weight = weight;
		this.type = type;
		this.level = level;
		this.attacks = attacks;

		if (is_yelling) 
		{
			this.yell();
		}
	}

	yell() {
		console.log(`•••••• ${this.name.toUpperCase()}`);
	}

	dump(save = false) {
		const pokemonNum = `•••••• #${this.number} ${this.name}`;
		const data = `size >> ${this.size}, weight >> ${this.weight}, type >> ${this.type}`;
		console.log(pokemonNum);
		console.log(data);

		if (save)
		{
			const d = new Date();
			const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
			const fileName = `pokecode.${date}.log`;
			const path = dumpPath + fileName;

			fs.appendFileSync(path, pokemonNum + '\r\n', 'utf-8');
			fs.appendFileSync(path, data + '\r\n', 'utf-8');
			console.log(`# The dump is successfully saved on file ${path}`);
		}
	}

	action() {
		const numAction = Math.floor(Math.random() * Math.floor(3));

		if (numAction == 0)
		{
			console.log("I'm sleeping");
		}
		else if (numAction == 1)
		{
			console.log("I'm playing");
		}
		else if (numAction == 2)
		{
			const numLevel = Math.floor(Math.random() * Math.floor(3) + 1);

			let newLevel = this.level + numLevel >= 100 ? 100 : this.level + numLevel;

			console.log(`I'm level up from ${this.level} to ${newLevel}`);

			this.level = newLevel;

			if (this.level == 100)
			{
				console.log(`I'm the best ${this.name} in Internet`);
			}
		}
	}
}

module.exports = Pokemon;