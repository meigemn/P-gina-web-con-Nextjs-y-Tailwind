import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.3 Puedo convalidar un módulo acreditando experiencia laboral",
}; export default function Home() {
  return (

    <div>
      <Titulo>{metadata.title}</Titulo>
      <Nav posicion={13} />
    </div>

  );
}
