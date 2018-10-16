const fs = require('fs');
const Trainer = require('./trainer');

function main(filename) {
	const data = fs.readFileSync(filename, "utf-8");
	const output = data.replace(/[\r\n\t]/g, '');
	console.log(`Reading new json data informaion >> ${output}`);

	const json = JSON.parse(output);

	let trainer = new Trainer(json.firstname, json.age);

	trainer.hey();
}

main(process.argv[2]);
