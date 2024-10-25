import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
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
