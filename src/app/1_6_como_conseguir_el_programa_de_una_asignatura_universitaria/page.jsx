import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.6 Como conseguir el programa de una asignatura universitaria",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={16} />
  </div>
  );
}
