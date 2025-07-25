import "./globals.css";
import Navegacao from "./components/Navegacao";

export const metadata = {
  title: "ADS Filmes",
  description: "Sistema de filmes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navegacao />
        {children}
      </body>
    </html>
  );
}
