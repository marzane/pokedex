import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/pokemons.module.css";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import { v4 as uuidv4 } from 'uuid';


function Pokemons () {

    const [query, setQuery] = useState("");  // query campo de busqueda
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false); // loading screen

    useEffect(() => {
            const pokemons = async () => {

                setLoading(true);

                const result = await fetchPokemons();
                setPokemons(result);

                setTimeout(() => setLoading(false), 500);
                //setLoading(false);

            };

            pokemons();
            
        }, []
    )


    const filterPokemon = pokemons?.slice(0, 151).filter((pokemon: Pokemon) => {
            return (pokemon.name.toLowerCase()).match(query.toLowerCase());
            //return pokemon.name.toLowerCase() == query.toLowerCase();

        });
    

    if(loading || !pokemons){
        return(
            <LoadingScreen />
        );
    }

    return (
        <>
        <Header 
            query={query}
            setQuery={setQuery}/>
        
        <main>
            <nav>
                {
                  filterPokemon?.map(
                    (pokemon: Pokemon) => {

                        return (
                            <Link to={`/pokemons/${pokemon["name"]}`} className={styles.pokemonLink} key={uuidv4()}>
                                <img src={pokemon["img"]} alt={pokemon["name"]} className={styles.pokemonImg}/>
                                <div className={styles.pokemonTexto}>
                                    <span>{pokemon["name"]}</span>
                                    <span>{pokemon["id"]}</span>
                                </div>
                            </Link>
                        );
                    }
                  )
                }
            </nav>
        </main>

        <Footer />
        
        </>
    );
}

export default Pokemons;