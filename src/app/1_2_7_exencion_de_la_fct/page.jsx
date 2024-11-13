import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.7-Exección de la FCT",
};export default function Home() {
  return (
    <div>
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
    <div className="mt-8 ml-4">
      <p>
      El módulo profesional de Formación en Centros de Trabajo nunca será susceptible de convalidación, sino de exención total o parcial. Se podrá calificar como exento por correspondencia total o parcial con la experiencia laboral demostrable relacionada con los estudios profesionales respectivos. Para ello se requiere la matriculación previa del alumno en el módulo.
      </p>
    </div>
    <div className="mt-8 ml-4">
      <p>
      Se debe acreditar, tanto para la exención total como para la parcial, una experiencia laboral equivalente al trabajo a tiempo completo de, al menos, un año, que permita demostrar que la persona solicitante tiene adquiridos los resultados de aprendizaje del módulo profesional de formación en centros de trabajo. En el caso de contratos a tiempo parcial, los días de cotización deberán ser equivalentes a un año a tiempo completo
      </p>
    </div>
    <div className="mt-8 ml-4">
      <p>Para solicitar la exención de la FCT <b>deberás enviar por correo certificado, y preferiblemente con acuse de recibo, a la atención de la Dirección de tu centro </b>lo siguiente:</p>
      <div>
        <p>
        ✔️<b>Anexo I</b> (solicitud de exención) de la Orden de 28 de septiembre de 2011, por la que se regulan los módulos profesionales de formación en centros de trabajo y de proyecto para el alumnado matriculado en centros docentes de la Comunidad Autónoma de Andalucía. Puedes obtener aquí el impreso solicitud exención FCT.
        </p>
        <p>
        ✔️ <b>Documentación acreditativa</b> que justifique la experiencia laboral.
        </p>
      </div>
    </div>
    {/* tarjeta */}
    <div className="mt-8 bg-blue-300 rounded-md p-6">
      <h1><b>Información sobre la exención de la FCT:</b></h1>
      <div className="mt-4 ml-8">
        <p>
        ✔️ Apartado: ¿Cómo se solicita la exención del módulo profesional de Formación en Centros de Trabajo (FCT)?, en el siguiente enlace:
        Convalidaciones entre módulos profesionales
        </p>
      </div>
      
    </div>
    <Nav posicion={12} />
  </div>
  );
}
