import {Pokemon} from "../models/pokemon";

class pokemonAPI {

async fetchPokemon(name) {

   const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
const data = await response.json();

//turn data into pokemon class 
const pokemonToDisplay = new Pokemon({
   name: data.name,
   type: data.types[0].type.name,
   height: data.height,
   weight: data.weight,
   number: data.id,
   hp: data.stats[0].base_stat,
   attack: data.stats[1].base_stat,
   defence: data.stats[2].base_stat,
   special: data.stats[3].base_stat
});
return pokemonToDisplay
} 

async fetchPokemonSpecies(name) {
   const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon-name}`)
   //need to set up the pokemon description here
}

}

export default new pokemonAPI();
