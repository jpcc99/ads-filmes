"use client"

import { useEffect, useState } from "react";

export default function FilmesLista() {
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState({});

    const apiUrl = "http://localhost:3001";

    const 

    useEffect(async () => {
        try {
            setIsLoading(true);
            const filmesResult = await fetch(`${apiUrl}/movies`);

            if (filmesResult.ok) {
                const filmesData = filmesResult.json();
                setFilmes(filmesData);
            }


        } catch(err) {
            setHasError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Carregando...</p>
            ): (
                <h2>Filmes</h2>
                
            )}
        </div>
    );
}