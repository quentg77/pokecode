const fs = require('fs');

const savePath = '../data/save/';
const Person = require('./person');

class Trainer extends Person {
    constructor(firstname, age) {

        if (typeof firstname !== 'undefined') {
            if (typeof Trainer.counter === 'undefined') {
                Trainer.counter = 1;
            }

            super(firstname, age);
            this.id = Trainer.counter++;
            this.pokemons = [];

            const d = new Date();
            this.startDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

            this.hi();
        }
    }

    hey() {
        const nbPokemons = this.pokemons.length;

        console.log(`
		Yoooo!
		I'm ${this.firstname} and I'm ${this.age} years old.
		I have ${nbPokemons} pokemon${nbPokemons > 1 ? 's' : ''} and I will be the best virtual pokemon master.
		`);
    }

    start(pokeList) {
        const random = Math.floor(Math.random() * Math.floor(pokeList.length));
        //console.log(random);
        console.log(`Yeaaaaaaah, my first pokemon is ${pokeList[random].name}`);
        pokeList[random].yell();
        this.pokemons.push(pokeList[random]);
        return random;
    }

    setPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }

    list() {
        for (let P of this.pokemons) {
            P.yell();
        }
    }

    getTrainerData() {
        let pokemons = [];

        for (const pok of this.pokemons) {
            pokemons.push({
                ndex: pok.number,
                level: pok.level
            });
        }

        let data = {
            id: this.id,
            firstname: this.firstname,
            age: this.age,
            pokemons,
            startDate: this.startDate
        };

        return data;
    }

    getName() {
        return this.firstname;
    }

    getPokemons() {
        return this.pokemons;
    }
}

module.exports = Trainer;