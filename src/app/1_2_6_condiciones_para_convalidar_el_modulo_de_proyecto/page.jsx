import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.6-Condiciones para convalidar el módulo de proyecto",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={11} />
  </div>
  );
}
