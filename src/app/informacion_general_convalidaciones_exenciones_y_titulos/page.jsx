import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
};export default function Home() {
  return (
    <div>
      <div>Pagina principal</div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <Nav posicion={0} />
    </div>
  );
}
