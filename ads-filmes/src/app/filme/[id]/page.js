"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PaginaDetalhesFilme({ params }) {
    const [filme, setFilme] = useState(null);
    const [carregando, setCarregando] = useState(true);
    
    const router = useRouter();
    const urlApi = "http://localhost:3001";
    const { id } = params;

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

    const excluirFilme = async () => {
        if (confirm('Excluir filme?')) {
            try {
                const resposta = await fetch(`${urlApi}/movies/${id}`, {
                    method: 'DELETE'
                });
                if (resposta.ok) {
                    router.push('/');
                }
            } catch (erro) {
                console.log('Erro');
            }
        }
    };

    if (carregando) {
        return <div className="loading">Carregando...</div>;
    }

    if (!filme) {
        return (
            <div className="container">
                <p>Filme não encontrado</p>
                <Link href="/" className="btn">Voltar</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <Link href="/" className="btn btn-secondary">Voltar</Link>
            
            <div className="card">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                    <img 
                        src={filme.poster_url} 
                        alt={filme.titulo}
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                    
                    <div>
                        <h1>{filme.titulo}</h1>
                        <p><strong>Gênero:</strong> {filme.genero}</p>
                        <p><strong>Lançamento:</strong> {new Date(filme.ano_lancamento).toLocaleDateString('pt-BR')}</p>
                        <p><strong>Descrição:</strong> {filme.descricao}</p>
                        
                        <div style={{ marginTop: '20px' }}>
                            <Link href={`/editar/${id}`} className="btn">
                                Editar
                            </Link>
                            <button onClick={excluirFilme} className="btn btn-danger">
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 