"use client"

import Link from "next/link";

export default function Navegacao() {
    const itensMenu = [
        { href: "/", texto: "Início" },
        { href: "/filmes", texto: "Filmes" },
        { href: "/cadastro", texto: "Cadastrar" }
    ];

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    ADS Filmes
                </Link>
                
                <ul className="nav-menu">
                    {itensMenu.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="nav-link">
                                {item.texto}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
} 