class Trainer {
	constructor(firstname, age) {

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

	hey () {
	const nbPokemons = this.pokemons.length;

	console.log(`
		Yoooo!
		I'm ${this.firstname} and I'm ${this.age} years old.
		I have ${nbPokemons} pokemon${nbPokemons > 1 ? 's' : ''} and I will be the best virtual pokemon master.
		`);
	}
}

module.exports = Trainer;