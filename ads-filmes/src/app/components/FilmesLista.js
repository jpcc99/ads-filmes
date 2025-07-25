"use client"

import { useEffect, useState } from "react";

export default function FilmesLista() {
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState({});

    useEffect(() => {
    }, []);

    return (
        <div>
            <h2>Filmes</h2>
        </div>
    );
}