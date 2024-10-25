import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
};export default function Home() {
  return (
<div>
  <Titulo>{metadata.title}</Titulo>
  <Nav posicion={0} />
</div>
  );
}
