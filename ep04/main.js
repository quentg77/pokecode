const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./pokemon');
const PokemonFactory = require('./pokemonFactory');

function main(filename) {
	const data = fs.readFileSync(filename, "utf-8");
	const output = data.replace(/[\r\n\t]/g, '');
	console.log(`Reading new json data informaion >> ${output}`);

	const json = JSON.parse(output);

	let trainer = new Trainer(json.firstname, json.age);
	
	trainer.hey();

	let pokemonData = {
		number : 1,
		name : 'pikachu',
		size : 0.57,
		weight : 14.3,
		type : ['Electric']
	};

	//console.log(pokemonData);

	let pokemon = new Pokemon(pokemonData);

	let salameche = PokemonFactory.create("Salamèche");
}

if (process.argv.length !=3)
{
	console.log('Error : need file path');
	process.exit(-1);
}

main(process.argv[2]);
