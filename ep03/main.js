const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./pokemon');

function main(filename) {
	const data = fs.readFileSync(filename, "utf-8");
	const output = data.replace(/[\r\n\t]/g, '');
	console.log(`Reading new json data informaion >> ${output}`);

	const json = JSON.parse(output);

	let trainer = new Trainer(json.firstname, json.age);
	
	trainer.hey();

	let pokemon = new Pokemon(1, 'pikachu', 0.57, 14.3, ['Electric'])
}

main(process.argv[2]);
