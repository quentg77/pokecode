const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./pokemon');
const PokemonFactory = require('./pokemonFactory');
const Pokedex = require('../data/pokedex');

const savePath = '../data/save/';

let allTrainers = [];

class Game {
	constructor(is_dump_on_file = false, to_save = false) {
		this.trainerList = [];
		this.dump = is_dump_on_file;
		this.to_save = to_save;
        this.pokestory = '../data/save/pokestory.json';
        this.pokemon_Starters = getPokemons(['Bulbizarre', 'Salamèche', 'Carapuce']);
	}

	init(fileName) {

		if (!fs.existsSync(this.pokestory))
		{
			const data = fs.readFileSync(fileName, "utf-8");
			const output = data.replace(/[\r\n\t]/g, '');
			console.log(`Reading new json data informaion >> ${output}`);

			const json = JSON.parse(output);
			const trainerList = json.trainers;

			let newTrainerList = [];

			for (let T of trainerList) {
				let trainer = new Trainer(T.firstname, T.age);
			
				trainer.hey();

				this.pokemon_Starters.splice(trainer.start(this.pokemon_Starters), 1);

				for (let i = 0; i < 5; i++) {
					const pokemon = PokemonFactory.createRandom();
					trainer.setPokemon(pokemon);
				}

				newTrainerList.push(trainer);
			}

			serializeTrainers(newTrainerList);

			allTrainers = newTrainerList;

			//console.log(newTrainerList);
			//console.log(newTrainerList[0].getTrainerData());
			//trainer.serialize();
		}
		else
		{
			const data = fs.readFileSync(this.pokestory, "utf-8");
			const output = data.replace(/[\r\n\t]/g, '');
			console.log(`Reading pokestory data informaion >> ${output}`);

			const json = JSON.parse(output);

			let trainerList = [];

			for (let T of json.trainers) {
				let trainer = new Trainer(T.firstname, T.age);

				for (let numberP of T.pokemons) {
					let pokemon = PokemonFactory.create({key : 'ndex', value : numberP.ndex});
					pokemon.setLevel(numberP.level);
					//pokemon.action(); // test action method
					//pokemon.dump(this.dump); // test dump
					trainer.setPokemon(pokemon);
				}
				
				trainerList.push(trainer);

				trainer.list();
			}

			allTrainers = trainerList;
		}
	}

	start() {
		let currentTrainer = 0;
		let currentPokemon = 0;

		console.log("0: Poké Action");
		console.log("1: Poké Fight");
		console.log("2: Poké Swap");

		process.stdin.setEncoding("ascii");

		process.stdin.on('data', function(chunk) {
			//console.log(`you write ${chunk}`);

			console.log("");

			if (chunk == 0)
			{
				allTrainers[currentTrainer].getPokemons()[currentPokemon].action();
			}
			else if (chunk == 1)
			{
				
			}
			else if (chunk == 2)
			{
				const pokelist = allTrainers[currentTrainer].getPokemons();
				const numPokemon = Math.floor(Math.random() * Math.floor(pokelist.length));
				currentPokemon = numPokemon;

				console.log(`${pokelist[numPokemon].getName()} GO !!!`);
			}
			else
			{
				console.log("Error");
			}

			serializeTrainers(allTrainers);

			this.start;
		});

		process.stdin.on('end', function() {
			console.log('the game is ended');
		});
	}
}

function getPokemons(pokemonList) {
	let table = [];
	for (let pokemonName of pokemonList) {
        table.push(PokemonFactory.create({ key: 'nom', value: pokemonName }));
	}
	return table;
}

function serializeTrainers(trainerList) {
	let newTrainerList = [];

	for (let T of trainerList) {
		newTrainerList.push(T.getTrainerData());
	}

	let data = {
		trainers : newTrainerList
	};

	let trainerJson = JSON.stringify(data, null, '\t');

	fs.writeFileSync(savePath + 'pokestory.json', trainerJson, 'utf-8');
}

module.exports = Game;