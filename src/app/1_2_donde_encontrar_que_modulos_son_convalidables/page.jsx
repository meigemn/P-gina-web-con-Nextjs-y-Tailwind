import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";
export const metadata = {
  title: "1.2 Dónde encontrar qué modulos son convalidables",
}; export default function Home() {
  return (
    <div>

      <Titulo>{metadata.title}</Titulo>
      <div className="mt-8 ml-4">
        <div>
          <p>Son dos los documentos que debes consultar:</p>
        </div>
        <div>
          <p className="mt-4 ml-8">
            ✔️Por un lado, los diferentes Anexos del Real Decreto 1085/2020, de 9 de diciembre,
            por el que se establecen convalidaciones de módulos profesionales de los títulos de Formación Profesional
            del sistema educativo español y las medidas para su aplicación, y se modifica el Real Decreto 1147/2011, de
            29 de julio, por el que se establece la ordenación general de la formación profesional del sistema educativo.
            Aquí puedes consultar las tablas de convalidaciones del Real decreto 1085/2020, de 9 de diciembre
            (tablas de convalidación).
          </p>
          <p className="mt-4 ml-8">
          ✔️Por otro, el Anexo IV del Real Decreto que crea el título LOE que estás estudiando, ya que establece las convalidaciones con módulos LOGSE del mismo Ciclo. 
            Quien haya superado la totalidad de un ciclo formativo LOGSE no podrá aportarlo para solicitar la convalidación de ningún módulo profesional del ciclo formativo LOE que lo sustituye. 
            Estas convalidaciones están reservadas para quien transita a un ciclo formativo LOE desde un ciclo formativo LOGSE, sin haberlo finalizado ni obtenido el título.
          </p>
        </div>
        <p className="mt-8">Ten en cuenta que los <b>módulos profesionales con el mismo código y denominación</b> presentes en diferentes ciclos formativos LOE <b>son en realidad el mismo módulo profesional.</b> Estos módulos se denominan <b>transversales</b> . Si superas un módulo profesional transversal en un ciclo formativo, lo tendrás superado en cualquier otro del que también forme parte y 
        <b>la calificación obtenida se traslada de un ciclo al otro sin necesidad de convalidación ni más trámite</b>.</p>
        <p>Los módulos profesionales de FOL y EIE tienen en todos los ciclos formativos LOE la misma denominación, pero diferentes códigos. Por tanto, no hay arrastre de calificación sino convalidación. Se deben cursar o convalidar de un ciclo formativo a otro (siempre que se cumplan los requerimientos para ello).</p>
          <div>
            <p className="ml-8">✔️La convalidación del módulo FOL puedes consultarla en el siguiente enlace: <a href="" className="underline text-blue-600">Convalidación de FOL</a>.</p>
            <p className="ml-8">✔️La convalidación del módulo EIE puedes consultarla en el siguiente enlace: <a href="" className="underline text-blue-600">Convalidación de EIE</a>.</p>
          </div>
      <div className="mx-auto flex justify-center w-[400px] h-[300px]">
        <Image layout='responsive'src='/pollo-con-gafas.jpg' alt="imagen balanza" width="50" height="50"></Image>
      </div>
      </div>
      <Nav posicion={5} />
    </div>
  )
};
