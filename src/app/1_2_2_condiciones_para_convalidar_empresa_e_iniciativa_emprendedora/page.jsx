import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

export const metadata = {
  title: "1.2.2-Condiciones para convalidar Empresa e Iniciativa Emprendedora",
};export default function Home() {
  return (
    <div>

    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <Nav posicion={7} />
    </div>
      </div>
  );
}
