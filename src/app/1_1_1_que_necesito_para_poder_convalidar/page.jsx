import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.1.1 ¿Que necesito para poder convalidar?",
};export default function Home() {
  return (
<div>
  <header>
    <Titulo>{metadata.title}</Titulo>
  </header>
  <main>
    
  </main>
  <nav>
    <Nav posicion={3} />\
  </nav>
</div>
  );
}
