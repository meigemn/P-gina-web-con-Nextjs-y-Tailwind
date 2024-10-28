import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1. Solicitud de convalidaciones",
};export default function Home() {
  return (
    <div>
      <header>
        <Titulo>{metadata.title}</Titulo>
      </header>
      <Nav posicion={1}/>
    </div>
  );
}
