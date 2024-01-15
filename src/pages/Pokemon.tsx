import React from "react";
import { useParams } from "react-router-dom";

function Pokemon () {
    const name = useParams();
    return (
        <>{name}</>
    );
}

export default Pokemon;