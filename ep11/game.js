const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./pokemon');
const PokemonFactory = require('./pokemonFactory');
const Pokedex = require('../data/pokedex');

class Game {
	constructor(is_dump_on_file = false, to_save = false) {
		this.to_save = to_save;
		this.pokestory = '../data/save/pokestory.json'
	}

	init(fileName) {

		if (!fs.existsSync(this.pokestory))
		{
			const data = fs.readFileSync(fileName, "utf-8");
			const output = data.replace(/[\r\n\t]/g, '');
			console.log(`Reading new json data informaion >> ${output}`);

			const json = JSON.parse(output);

			let trainer = new Trainer(json.firstname, json.age);
			
			trainer.hey();

			let starterPack = ['Bulbizarre', 'Salamèche', 'Carapuce'];

			trainer.start(getPokemons(starterPack));

			trainer.serialize();
		}
		else
		{
			const data = fs.readFileSync(this.pokestory, "utf-8");
			const output = data.replace(/[\r\n\t]/g, '');
			console.log(`Reading pokestory data informaion >> ${output}`);

			const json = JSON.parse(output);

			let trainerList = [];

			for (let T of json.trainer) {
				let trainer = new Trainer(T.firstname, T.age);

				for (let numberP of T.pokemons) {
					const pokemon = PokemonFactory.create({key : 'ndex', value : numberP});
					pokemon.action(); // test action method
					trainer.addPokemon(pokemon);
				}
				
				trainer.list();
			}
		}
	}

	start() {
		console.log("0: Hello");
		console.log("1: Goodbye");

		process.stdin.setEncoding("ascii");

		process.stdin.on('data', function(chunk) {
			console.log(`you write ${chunk}`);
		});

		process.stdin.on('end', function() {
			console.log('the game is ended');
		});
	}
}

function getPokemons(pokemonList) {
	let table = [];
	for (let pokemonName of pokemonList) {
		table.push(PokemonFactory.create({key : 'nom', value : pokemonName}))
	}
	return table;
}

module.exports = Game;