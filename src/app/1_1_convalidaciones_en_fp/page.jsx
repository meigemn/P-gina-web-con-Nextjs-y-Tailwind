import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

export const metadata = {
  title: "1.1 Convalidaciones en FP",
};export default function Home() {
  return (
    <div>
      
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <Nav posicion={2} />
    </div>
  );
}
