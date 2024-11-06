import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
};export default function Home() {
  return (
    <div>
      <header>
        <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      </header>

      <Nav posicion={0} />
    </div>
  );
}
