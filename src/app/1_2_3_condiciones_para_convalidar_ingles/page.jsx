import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
export const metadata = {
  title: "1.2.3-Condiciones para convalidar Inglés",
}; export default function Home() {
  return (
    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <Nav posicion={8} />
    </div>
  );
}
