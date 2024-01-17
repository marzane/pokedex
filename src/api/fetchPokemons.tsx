// https://unpkg.com/pokemons@1.1.0/pokemons.json

export async function fetchPokemons () {

    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if(!response.ok){
        throw new Error("failed to fetch pokemons");
    }

    const result = await response.json();

    const pokemons = result.results.map((e: any) => {
        return {
            name: e.name,
            id: e.national_number,
            img: e.sprites.animated
        }
    });

    return pokemons;
}