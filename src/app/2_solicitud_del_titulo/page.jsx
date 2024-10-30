import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "2. Solicitud del Título",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={21} />
  </div>
  );
}
