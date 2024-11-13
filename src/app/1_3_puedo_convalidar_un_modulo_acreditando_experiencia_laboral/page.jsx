import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
export const metadata = {
  title: "1.3 Puedo convalidar un módulo acreditando experiencia laboral",
}; export default function Home() {
  return (

    <div className="flex flex-col">
      <Titulo>{metadata.title}</Titulo>
      <div >
        <div className="mt-8 ml-4">
          <p>
            <b>Salvo el módulo de Formación en Centros de Trabajo </b>(las prácticas), <b>la respuesta es no</b>. 
            En general, <b>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral</b>.
          </p>
        </div>
        <div className="mt-8 ml-4 flex flex-row">
          <p>
            Si alguna persona cree que con su experiencia profesional ha adquirido las competencias necesarias de un módulo concreto, 
            debe acreditar la posesión de esas unidades de competencia bien mediante un <b>certificado de profesionalidad </b>o bien porque 
            ha participado en un procedimiento de acreditación de competencias profesionales y así se lo han reconocido, no a través 
            de un certificado de vida laboral. <b>Tampoco serán válidos los resguardos de haber solicitado el certificado de profesionalidad, los diplomas o certificados de asistencia expedidos por el centro o entidad de formación u otros documentos justificativos distintos de los indicados</b>. Estas convalidaciones se regulan en el anexo V.A del Real Decreto que crea el título que se está estudiando (en este anexo se indican las unidades de competencia que se adquieren al superar cada módulo profesional).
          </p>
   {/* imagen */}
   <div className=" w-[400px] m-4 ">
          <Image layout='responsive'src='/trabajador.jpg' alt="imagen balanza" width="50" height="50"></Image>
        </div>
        </div>
        
        <div className="mt-8 ml-4">
          <p>
            Por tanto, <b>las unidades de competencia debidamente acreditadas pueden ser 
            aportadas para solicitar la convalidación de módulos profesionales según lo
            regulado en el anexo V.A del Real Decreto</b> que regula cada título siempre 
            que se aporte el certificado de profesionalidad o la <b>certificación oficial 
            de la acreditación de la Unidad de Competencia.</b>
          </p>
        </div>
      </div>
      <Nav posicion={13} />
    </div>

  );
}
