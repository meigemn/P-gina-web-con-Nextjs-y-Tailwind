import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.5-Condiciones para convalidar Horas de Libre Configuración",
};export default function Home() {
  return (
  <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={10} />
  </div>
  );
}
