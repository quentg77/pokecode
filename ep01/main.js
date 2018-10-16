const fs = require('fs');

function main(filename) {
	const json = fs.readFileSync(filename, "utf-8");
	const data = json.replace(/[\r\n\t]/g, '');
	console.log(`Reading new json data informaion >> ${data}`);
}

main(process.argv[2]);