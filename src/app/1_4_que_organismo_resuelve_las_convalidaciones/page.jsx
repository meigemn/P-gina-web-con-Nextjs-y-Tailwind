import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.4 Qué organismo resuelve las convalidaciones",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <div className="mt-8 ml-4">
      <p>
      Las convalidaciones recogidas expresamente en los <b> diferentes Anexos 
      del RD 1085/2020, de 9 de diciembre</b> las resuelve la dirección del centro
      donde esté matriculado el alumno/a. Se <b>resolverá negativamente aquellas 
      solicitudes de su competencia que no aparezcan en los anexos anteriormente 
      citados</b>.
      </p>
    </div>
    <div className="mt-8 ml-4">
      <p>
      Aquellas solicitudes que acrediten para convalidar <b>una titulación universitaria 
      o un título de FP1 o FP2</b>  las resuelve el <b>Ministerio de Educación y Formación 
      Profesional</b>. Estas últimas convalidaciones se envían al centro y se trasladan 
      al Ministerio. <b>En ningún caso el alumnado podrá enviar directamente la solicitud 
      de convalidación al Ministerio</b>.
      </p>
    </div>
    <Nav posicion={14} />
  </div>
  );
}
