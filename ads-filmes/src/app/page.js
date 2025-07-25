import Image from "next/image";
import styles from "./page.module.css";
import FilmesLista from "./components/FilmesLista";

export default function Home() {
  return (
    <main>
      <h1>Ads-Filmes</h1>
      <p>Um trabalho para a cadeira de WEB II.</p>
      <FilmesLista></FilmesLista>
    </main>
  );
}
