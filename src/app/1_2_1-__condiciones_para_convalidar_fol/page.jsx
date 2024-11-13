import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

export const metadata = {
  title: "1.2.1-Condiciones para convalidar FOL",
};export default function Home() {
  return (
    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <div>{/* div principal */}
        <div className="mt-8 ml-4">{/* comienzo */}
          <p>Para poder convalidar el módulo de FOL (Formación y Orientación Laboral) 
            es necesario acreditar alguna de las siguientes condiciones:
          </p>
        </div>{/* fin comienzo */}

        <div className="ml-10 mt-4">
          <p>✔️Si el módulo a convalidar pertenece a un ciclo LOE (Ley Orgánica 2/2006, de 3 de mayo). 
            <b>Para esta convalidación es indiferente que los módulos que se aporten sean de grado medio o superior</b>.
          </p>
        </div>
        <div className="ml-16 mt-4">
          <p>➡️<b>Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente</b></p>
          <p>➡️ <b>Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre) y poseer un certificado que acredite que se posee la formación establecida para el desempeño de las funciones de nivel básico de la actividad preventiva </b>
            (PRL). Sirve cualquier curso de PRL impartido por alguna entidad legalmente constituida, de una duración no inferior a 30 horas y cuyos contenidos incluyan los que indica el anexo IV del Real Decreto 39/1997, de 17 de enero (BOE de 31 de enero de 1997), por el que se aprueba el Reglamento de los Servicios de Prevención.
              El certificado del curso de PRL deberá hacer constar específicamente tanto la duración como los contenidos impartidos.</p>
          <p>➡️. <b> Poseer el título de Técnico Superior en Prevención de Riesgos Profesionales derivado de la Ley Orgánica 1/1990, de 3 de octubre</b></p>
        </div>
        <div className="ml-10 mt-4">
        ✔️Si el módulo a convalidar pertenece a un ciclo LOGSE de grado medio (Ley Orgánica 1/1990, de 3 de octubre):
          <div className="ml-6 mt-4">
            <p>
            ➡️  <b>Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre).</b>
            </p>
            <p>
            ➡️ <b>Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</b>
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4">{/* tabla */}
        <table className=" table-auto border-collapse ">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border-b bg-blue-200">Módulo a Convalidar</th>
            <th className="px-4 py-2 border-b bg-blue-200">Formación a Aportar</th>
          </tr>
        </thead>
        <tbody>
        {/* primer fol */}
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200 w-40" > <b>FOL GM (LOGSE Ley Orgánica 1/1990, de 3 de octubre)</b></td>
              <td className="px-4 py-2">FOL GM LOGSE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">FOL GS LOGSE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">FOL GM LOE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">FOL GS LOE</td>
            </tr>
         {/* segundo Fol */}
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"> <b>FOL GS (LOGSE Ley Orgánica 1/1990, de 3 de octubre)</b></td>
              <td className="px-4 py-2">FOL GS LOGSE</td>
            </tr>
            {/* tercer fol */}
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"><b> FOL GM (LOE Ley Orgánica 2/2006, de 3 de mayo)</b></td>
              <td className="px-4 py-2">FOL GM LOE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"> </td>
              <td className="px-4 py-2">FOL GS LOE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"> </td>
              <td className="px-4 py-2">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"> </td>
              <td className="px-4 py-2">FOL GS LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"> </td>
              <td className="px-4 py-2">FTítulo Técnico Superior en Prevención de Riesgos Profesionales</td>
            </tr>
            {/* cuarto fol */}
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"> <b>FOL GS (LOE Ley Orgánica 2/2006, de 3 de mayo)</b></td>
              <td className="px-4 py-2">FOL GM LOE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">FOL GS LOE</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">FOL GS LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-2 bg-blue-200"></td>
              <td className="px-4 py-2">Título Técnico Superior en Prevención de Riesgos Profesionales</td>
            </tr>

        </tbody>
      </table>
        </div>

      </div>{/* Fin del div principal */}
      <Nav posicion={6} />
    </div>
  );
}
