import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.1.2. ¿Que estudios puedo alegar?",
};export default function Home() {
  return (
    <div>
      <div></div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <Nav posicion={4} />
    </div>
  );
}
