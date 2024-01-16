import React from "react";
import styles from "../css/header.module.css";

// en typescript hay que declarar de que tipo son los props por seguridad
type headerProps = {
    query: string;
    setQuery: (query: string) => void
}

function Header ({ query, setQuery }: headerProps) {

    return(
        <header className={styles.header}>
            <form className={styles.formulario}>
                <input 
                    type="text" 
                    placeholder="search a pokemon" 
                    className={styles.barraBusqueda} 
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </header>
    );
}

export default Header;