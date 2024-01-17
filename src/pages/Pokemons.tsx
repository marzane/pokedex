import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/pokemons.module.css";
import bulbasaurImg from "../img/bulbasaur.gif";
import { fetchPokemons } from "../api/fetchPokemons";

function Pokemons () {

    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
            const pokemons = async () => {
                const result = await fetchPokemons();
                setPokemons(result);
            };

            pokemons();
        }, []
    )

    return (
        <>
        <Header 
            query={query}
            setQuery={setQuery}/>
        
        <main>
            <nav>

                {
                  pokemons?.slice(0, 151).map(
                    (pokemon) => {
                        return (
                            <Link to={`/pokemons/${pokemon["name"]}`} className={styles.pokemonLink} key={pokemon["id"]}>
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