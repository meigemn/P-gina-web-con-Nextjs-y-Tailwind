import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

export const metadata = {
  title: "1.2.1-Condiciones para convalidar FOL",
};export default function Home() {
  return (
    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <Nav posicion={6} />
    </div>
  );
}
