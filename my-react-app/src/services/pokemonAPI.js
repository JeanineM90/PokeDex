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
});
return pokemonToDisplay
} 

}

export default new pokemonAPI();
