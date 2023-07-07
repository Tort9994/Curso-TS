import axios from "axios"
import { Pokemon } from '../interfaces/pokemon';



export const getPokemons = async( pokemonid:  number): Promise<Pokemon> => {
 
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
    console.log(data.abilities[0].ability.name)
    return data
}

