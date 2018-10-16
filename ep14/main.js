const Game = require('./game');

if (process.argv.length < 3) {
    console.log('Error : need file path');
    process.exit(-1);
}

const filename = process.argv[2];
const dump_on_file = process.argv[3] === '--log';
const to_save = process.argv[4] === 'to_save';

const game = new Game(dump_on_file, to_save);
game.init(filename);
game.start();