import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/footer.module.css";
import pokemonPik from "../img/pikachu.png";
import pokemonPoi from "../img/pointer.png";
import pokemonPok from "../img/pokeball.png";

function Footer () {
    return(
        <footer className={styles.footer}>
            <Link to={"/pokemons"} className={styles.link}>
                <img src={pokemonPik} alt="" title="pokemons" className={styles.img}/>
                Pokemons
            </Link>
            <Link to={"/items"} className={styles.link} onClick={e => e.preventDefault()}>
                <img src={pokemonPok} alt="" title="items" className={styles.img}/>
                Items (not available)
            </Link>
            <Link to={"/map"} className={styles.link}>
                <img src={pokemonPoi} alt="" title="map" className={styles.img}/>
                Map (not available)
            </Link>
        </footer>
    );
}

export default Footer;