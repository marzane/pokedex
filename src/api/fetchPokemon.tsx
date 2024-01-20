import { PokemonInfo } from "../types/types";

export async function fetchPokemon (name: string): Promise<PokemonInfo> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

    if(!response.ok){
        throw new Error("failed to fetch pokemons");
    }

    const result = await response.json();

    const pokemon = {
        name: result.name,
        img: result.sprites.front_default,
        id: result.id,
        attack: result.stats[1].base_stat,
        hp: result.stats[0].base_stat,
        defense: result.stats[2].base_stat
    }

    return pokemon; 
}