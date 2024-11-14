import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.7 Como saber si me convalidaran un módulo si he alegado estudios universitarios",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <div className="mt-8 ml-4">
      <p>No se puede saber a priori.</p>
    </div>
    <div className="mt-8 ml-4">
      <p>
      Por eso el Ministerio de Educación y Formación Profesional solicita los programas universitarios 
      sellados: para poder analizar caso a caso y de forma individualizada cada convalidación.
      </p>
    </div>
    <div className="mt-8 ml-4">
      <p>
      El Ministerio de Educación y Formación Profesional tiene en su página Web información sobre la 
      convalidación de módulos profesionales aportando estudios universitarios. La podéis encontrar en este <b><a href="">enlace</a></b>.
      </p>
    </div>
    <Nav posicion={17} />
  </div>
  );
}
