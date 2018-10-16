const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./pokemon');
const PokemonFactory = require('./pokemonFactory');

function main(filename, is_dump_on_file = false, is_yelling = false) {
	const data = fs.readFileSync(filename, "utf-8");
	const output = data.replace(/[\r\n\t]/g, '');
	console.log(`Reading new json data informaion >> ${output}`);

	const json = JSON.parse(output);

	let trainer = new Trainer(json.firstname, json.age);
	
	trainer.hey();

	let starterPack = ['Bulbizarre', 'Salamèche', 'Carapuce'];

	trainer.start(getPokemons(starterPack));
}

function getPokemons(pokemonList) {
	let table = [];
	for (let pokemonName of pokemonList) {
		table.push(PokemonFactory.create(pokemonName))
	}
	return table;
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
