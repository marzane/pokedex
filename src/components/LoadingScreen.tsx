import React from "react";
import pokedex from "../img/pokedex.png";
import styles from "../css/LoadingScreen.module.css";

function LoadingScreen () {

    return(
        <div className={styles.loadingScreen}>
            <img src={pokedex} alt="pokedex" className={styles.loadingImg}/>
        </div>
    );
}

export default LoadingScreen;