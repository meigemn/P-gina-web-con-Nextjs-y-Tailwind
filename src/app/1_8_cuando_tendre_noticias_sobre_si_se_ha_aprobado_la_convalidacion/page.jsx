import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.8 Cuando tendre noticias sobre si se ha aprobado la convalidación",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <Nav posicion={18} />
  </div>
  );
}
