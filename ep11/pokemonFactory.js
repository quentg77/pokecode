const fs = require('fs');
const Pokedex = require('../data/pokedex');
const Pokemon = require('./pokemon');

class PokemonFactory {

	static create({key, value}) {
		const pokemon = Pokedex.find(function(item) {
			return item[key] == value;
		});

		let i = 1;
		let type = [];
		while (pokemon[`type${i}`] != undefined)
		{
			type.push(pokemon[`type${i++}`])
		}

		let attacks = [];
		for (let item of pokemon.attaques) {
			let attack = {
				level : item.niveau.replace('Départ', 3),
				name : item.nom,
				power : item.puissance,
				precision : item.precision,
				pp : item.pp
			}

			attacks.push(attack);
		}

		let pokemonData = {
			number : pokemon.ndex,
			name : pokemon.nom,
			size : pokemon.taille,
			weight : pokemon.poids,
			type,
			attacks
		};

		//console.log(pokemonData);

		return new Pokemon(pokemonData);
	}
}

module.exports = PokemonFactory;