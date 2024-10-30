import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.7-Exección de la FCT",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={12} />
  </div>
  );
}
