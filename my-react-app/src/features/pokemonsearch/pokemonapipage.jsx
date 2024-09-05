import './pokemonapipage.css'
import { useState } from "react";
import pokemonAPI from "../../services/pokemonAPI"

export function PokemonApiPage() {
    const [input, setInput]= useState('');
    const [pokemon, setPokemon]=useState(null);

    const handleInputChange= (Event) => {
        setInput(event.target.value)
    }

    const handleButtonClick = async () => {
        const result =await pokemonAPI.fetchPokemon(input);
        console.log(result);
        setPokemon(result);
    }
    console.log(input.toString());
    return (
        <div name="home page">
            <div name ="title">
            <h1>
                PokemonAPI 
            </h1>
            <input type="text" placeholder="Enter Pokemon Name" value ={input} onChange={handleInputChange}/> 
            <button onClick={handleButtonClick}>search</button>
            </div>
            <div class= "grid-container">
            <div class= "grid-item"><h2>{pokemon ? `name:  ${pokemon.name}` : 'get a pokemon dummy'}</h2></div>   
            <div class= "grid-item"><h2>{pokemon ? `type: ` + pokemon.type : ''}</h2></div> 
            <div class= "grid-item"><h2>{pokemon ? `height: ` + pokemon.height : ''}</h2></div> 
            <div class= "grid-item"><h2>{pokemon ? `weight: ` + pokemon.weight : ''}</h2></div> 
            <div class= "grid-item"><h2>{pokemon ? `number: ` + pokemon.number : ''}</h2></div>   
            </div>      
        </div>
    );
}