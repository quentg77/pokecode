const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./pokemon');
const PokemonFactory = require('./pokemonFactory');

function main(filename, is_dump_on_file = false) {
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

	//let pokemon = new Pokemon(pokemonData);

	//let salameche = PokemonFactory.create("Salamèche");

	//let pikachu = PokemonFactory.create("Pikachu");
	
	let pokemonBonus = PokemonFactory.create("Mackogneur");

	//salameche.dump(is_dump_on_file);
	//pikachu.dump(is_dump_on_file);
	pokemonBonus.dump(is_dump_on_file);
}

if (process.argv.length !=3 && process.argv.length !=4)
{
	console.log('Error : need file path');
	process.exit(-1);
}

if (process.argv[3] == '--log')
{
	main(process.argv[2], process.argv[3]);
}
else
{
	main(process.argv[2]);
}
