"use client"

import FilmesLista from "./components/FilmesLista";

export default function PaginaInicial() {
  return (
    <div className="container">
      <h1>ADS Filmes</h1>
      <FilmesLista />
    </div>
  );
}
