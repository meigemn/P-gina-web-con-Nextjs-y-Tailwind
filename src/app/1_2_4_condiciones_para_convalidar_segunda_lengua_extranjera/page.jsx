import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.4-Condiciones para convalidar Segunda Lengua Extranjera",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={9} />
  </div>
  );
}
