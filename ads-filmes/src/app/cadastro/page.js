"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PaginaCadastro() {
    const [filme, setFilme] = useState({
        titulo: '',
        descricao: '',
        ano_lancamento: '',
        poster_url: '',
        genero: ''
    });

    const [carregando, setCarregando] = useState(false);
    const router = useRouter();
    const urlApi = "http://localhost:3001";

    const generos = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Terror', 'Romance',
        'Animação', 'Documentário', 'Fantasia', 'Suspense', 'Crime', 'Mistério'];

    const manipularMudancaCampo = (evento) => {
        const { name, value } = evento.target;
        setFilme(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const manipularEnvioFormulario = async (evento) => {
        evento.preventDefault();
        setCarregando(true);

        try {
            const resposta = await fetch(`${urlApi}/movies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filme)
            });

            if (resposta.ok) {
                router.push('/filmes');
            }
        } catch (erro) {
            console.log('Erro ao cadastrar');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="container">
            <h1>Cadastrar Filme</h1>

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
                    <button type="submit" className="btn btn-success" disabled={carregando}>
                        {carregando ? 'Salvando...' : 'Cadastrar'}
                    </button>
                    <Link href="/" className="btn btn-secondary">
                        Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
} 