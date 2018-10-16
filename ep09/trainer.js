const fs = require('fs');

const savePath = '../data/save/';

class Trainer {
	constructor(firstname, age) {

		if (typeof firstname != 'undefined')
		{
			if (typeof Trainer.counter == 'undefined') 
			{
				Trainer.counter = 1;
			}

			this.firstname = firstname;
			this.age = age;
			this.id = Trainer.counter++;
			this.pokemons = [];

			const d = new Date();
			this.startDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

			console.log(`Here come's a new challenger ••[[ ${this.id} ${this.firstname}`);
		}
	}

	hey() {
	const nbPokemons = this.pokemons.length;

	console.log(`
		Yoooo!
		I'm ${this.firstname} and I'm ${this.age} years old.
		I have ${nbPokemons} pokemon${nbPokemons > 1 ? 's' : ''} and I will be the best virtual pokemon master.
		`);
	}

	start(pokeList) {
		const random = Math.floor(Math.random() * Math.floor(pokeList.length));
		//console.log(random);
		console.log(`Yeaaaaaaah, my first pokemon is ${pokeList[random].name}`);
		pokeList[random].yell();
		this.pokemons.push(pokeList[random]);
	}

	addPokemon(pokemon) {
		this.pokemons.push(pokemon);
	}

	list() {
		for (let P of this.pokemons) {
			P.yell();
		}
	}

	serialize() {
		let pokemons = [];

		for (const pok of this.pokemons) {
			pokemons.push(pok.number);
		}

		let data = {
			trainer : [
				{
					id : this.id,
					firstname : this.firstname,
					age : this.age,
					pokemons,
					startDate : this.startDate
				}
			]
		};

		let trainerJson = JSON.stringify(data, null, '\t');

		fs.writeFileSync(savePath + 'pokestory.json', trainerJson, 'utf-8');
	}
}

module.exports = Trainer;