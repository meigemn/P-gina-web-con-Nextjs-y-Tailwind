import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.6-Condiciones para convalidar el módulo de proyecto",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <div className="mt-8 ml-4">
      <p>El módulo profesional de Proyecto correspondiente a títulos de Formación profesional de grado superior no podrá ser objeto de convalidación ni de exención en ningún caso.
        </p>
    </div>
    <Nav posicion={11} />
  </div>
  );
}
