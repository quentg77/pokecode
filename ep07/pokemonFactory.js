const fs = require('fs');
const Pokedex = require('../data/pokedex');
const Pokemon = require('./pokemon');

class PokemonFactory {

/*	static create(pokemonName) {
		const pokemon = Pokedex.find(function(item) {
			return item.nom == pokemonName
		});

		let i = 1;
		let type = [];
		while (pokemon[`type${i}`] != undefined)
		{
			type.push(pokemon[`type${i++}`])
		}

		let pokemonData = {
			number : pokemon.ndex,
			name : pokemon.nom,
			size : pokemon.taille,
			weight : pokemon.poids,
			type
		};

		return new Pokemon(pokemonData);
	}*/

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

		let pokemonData = {
			number : pokemon.ndex,
			name : pokemon.nom,
			size : pokemon.taille,
			weight : pokemon.poids,
			type
		};

		return new Pokemon(pokemonData);
	}
}

module.exports = PokemonFactory;