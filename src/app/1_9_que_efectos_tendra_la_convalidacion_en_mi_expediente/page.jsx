import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.9 Que efectos tendría la convalidación en mi expediente",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <div className="mt-8 ml-8">
      <div>
        <p>
        Cada módulo profesional convalidado se recogerá en los documentos académicos, a efectos de cálculo de la nota media del ciclo formativo de Formación Profesional, con la calificación obtenida por el solicitante en el módulo profesional cursado que conste en la documentación académica correspondiente.
        </p>
      </div>
      <div>
        <p>
        Los módulos profesionales convalidados con estudios universitarios, así como los que se convaliden aportando estudios anteriores a la LOGSE, unidades de competencia o certificación académica oficial de idioma no llevarán asignada ninguna puntuación, constando en el expediente del alumnado como convalidado y no computarán a efectos de cálculo de la nota media del ciclo formativo.
        </p>
      </div>
    </div>
    <Nav posicion={19} />
  </div>
  );
}
