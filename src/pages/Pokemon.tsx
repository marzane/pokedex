import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import pokeballImg from "../img/pokeball.png";
import styles from "../css/pokemon.module.css";
import bulbasaurImg from "../img/bulbasaur.gif";
import { PokemonInfo } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";

function Pokemon () {
    const { name } = useParams();
    const navigation = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonInfo>();
    const [loading, setLoading] = useState(false); // loading screen

    useEffect(() => {
        const pokemon = async () => {

            setLoading(true);

            const result = await fetchPokemon(name as string);
            setPokemon(result);

            setTimeout(() => setLoading(false), 200);

        };

        pokemon();
        
    }, [name]
)


if(loading || !pokemon){
    return(
        <LoadingScreen />
    );
}

    return (
        <>
        <button onClick={() => navigation(-1)} className={styles.botonBack}>
            <img src={pokeballImg} alt="pokeball" />
            Go back
        </button>

        <main className={styles.pokemonInfo}>
            <div className={styles.pokemonName}>{ pokemon?.name.toUpperCase() }</div>
            <div>Nr. {pokemon?.id}</div>
            <div>
                <img src={pokemon?.img} alt={pokemon?.name} className={styles.pokemonImg}/>
            </div>
            <div>HP: {pokemon?.hp}</div>
            <div>Attack: {pokemon?.attack}</div>
            <div>Defense: {pokemon?.defense}</div>
        </main>

        <Footer />
        </>
    );
}

export default Pokemon;