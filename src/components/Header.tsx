import React from "react";
import "../css/Header.css";

function Header () {
    return(
        <header className="encabezado-app">
            <form className="formulario-busqueda">
                <input type="text" placeholder="search a pokemon" className="barra-busqueda"/>
                <input type="submit" className="boton-enviar"/>
            </form>
        </header>
    );
}

export default Header;