"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FilmesLista() {
    const [filmes, setFilmes] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const urlApi = "http://localhost:3001";

    useEffect(() => {
        buscarFilmes();
    }, []);

    const buscarFilmes = async () => {
        try {
            setCarregando(true);
            const resposta = await fetch(`${urlApi}/movies`);
            if (resposta.ok) {
                const dadosFilmes = await resposta.json();
                setFilmes(dadosFilmes);
            }
        } catch(erro) {
            console.log('Erro ao carregar filmes');
        } finally {
            setCarregando(false);
        }
    };

    const excluirFilme = async (id) => {
        if (confirm('Excluir filme?')) {
            try {
                const resposta = await fetch(`${urlApi}/movies/${id}`, {
                    method: 'DELETE'
                });
                if (resposta.ok) {
                    setFilmes(filmes.filter(filme => filme.movie_id !== id));
                }
            } catch (erro) {
                console.log('Erro ao excluir');
            }
        }
    };

    if (carregando) {
        return <div className="loading">Carregando...</div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2>Filmes ({filmes.length})</h2>
                <Link href="/cadastro" className="btn btn-success">
                    Adicionar
                </Link>
            </div>

            {filmes.length === 0 ? (
                <div className="card">
                    <p>Nenhum filme cadastrado.</p>
                </div>
            ) : (
                <div className="grid">
                    {filmes.map((filme) => (
                        <div key={filme.movie_id} className="card">
                            <img 
                                src={filme.poster_url} 
                                alt={filme.titulo}
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                            />
                            <h3>{filme.titulo}</h3>
                            <p>{filme.genero}</p>
                            <div>
                                <Link href={`/filme/${filme.movie_id}`} className="btn">
                                    Detalhes
                                </Link>
                                <Link href={`/editar/${filme.movie_id}`} className="btn btn-secondary">
                                    Editar
                                </Link>
                                <button 
                                    onClick={() => excluirFilme(filme.movie_id)}
                                    className="btn btn-danger"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}