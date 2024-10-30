import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
export const metadata = {
  title: "1.2 Dónde encontrar qué modulos son convalidables",
};export default function Home() {
  return (
    <div>
      <Nav posicion={5} />
      <Titulo>{metadata.title}</Titulo>
    </div>
    )
};
