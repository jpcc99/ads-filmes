"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function PaginaEditarFilme({ params }) {
    const [filme, setFilme] = useState({
        titulo: '',
        descricao: '',
        ano_lancamento: '',
        poster_url: '',
        genero: ''
    });
    
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    
    const router = useRouter();
    const urlApi = "http://localhost:3001";
    const { id } = React.use(params);

    const generos = ['Ação', 'Comédia', 'Drama', 'Terror', 'Romance'];

    useEffect(() => {
        buscarFilme();
    }, [id]);

    const buscarFilme = async () => {
        try {
            const resposta = await fetch(`${urlApi}/movies/${id}`);
            if (resposta.ok) {
                const dadosFilme = await resposta.json();
                setFilme(dadosFilme);
            }
        } catch (erro) {
            console.log('Erro');
        } finally {
            setCarregando(false);
        }
    };

    const manipularMudancaCampo = (evento) => {
        const { name, value } = evento.target;
        setFilme(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const manipularEnvioFormulario = async (evento) => {
        evento.preventDefault();
        setSalvando(true);

        try {
            const resposta = await fetch(`${urlApi}/movies/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filme)
            });

            if (resposta.ok) {
                router.push(`/filme/${id}`);
            }
        } catch (erro) {
            console.log('Erro');
        } finally {
            setSalvando(false);
        }
    };

    if (carregando) {
        return <div className="loading">Carregando...</div>;
    }

    return (
        <div className="container">
            <Link href={`/filme/${id}`} className="btn btn-secondary">Voltar</Link>
            
            <h1>Editar Filme</h1>

            <form onSubmit={manipularEnvioFormulario}>
                <div className="form-group">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={filme.titulo}
                        onChange={manipularMudancaCampo}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={filme.descricao}
                        onChange={manipularMudancaCampo}
                        className="form-textarea"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ano_lancamento" className="form-label">Data</label>
                    <input
                        type="date"
                        id="ano_lancamento"
                        name="ano_lancamento"
                        value={filme.ano_lancamento}
                        onChange={manipularMudancaCampo}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="genero" className="form-label">Gênero</label>
                    <select
                        id="genero"
                        name="genero"
                        value={filme.genero}
                        onChange={manipularMudancaCampo}
                        className="form-select"
                        required
                    >
                        <option value="">Selecione</option>
                        {generos.map(genero => (
                            <option key={genero} value={genero}>{genero}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="poster_url" className="form-label">URL do Poster</label>
                    <input
                        type="url"
                        id="poster_url"
                        name="poster_url"
                        value={filme.poster_url}
                        onChange={manipularMudancaCampo}
                        className="form-input"
                        required
                    />
                </div>

                <div>
                    <button type="submit" className="btn btn-success" disabled={salvando}>
                        {salvando ? 'Salvando...' : 'Salvar'}
                    </button>
                    <Link href={`/filme/${id}`} className="btn btn-secondary">
                        Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
} 