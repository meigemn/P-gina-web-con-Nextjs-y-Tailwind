import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.4-Condiciones para convalidar Segunda Lengua Extranjera",
};export default function Home() {
  return (
    <div className="flex flex-col">
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}

    <div className="flex justify-center mt-4 w-[700px] m-auto" >{/* tabla */}
    <table className="border-separate">
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Módulo a convalidar</td>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Formación a aportar</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="4">2ª Lengua Extranjera LOGSE.</td>
            <td className="border-gray-200 border-[1px] p-2">
              MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma que la que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Certificado de Nivel Intermedio (B1), equivalente o superior, de la Escuela Oficial de Idiomas (RD 1629/2006, de 29 de diciembre) siempre que sea de la misma lengua extranjera que la que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado en Filología o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado Traducción e Interpretación, o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="4">0180 2ª Lengua Extranjera.</td>
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Segunda Lengua Extranjera LOGSE.</li>
                <li>Cuando la lengua extranjera cursada y superada sea la misma que se desea convalidar.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado del Ciclo Elemental o de Aptitud, de la Escuela Oficial de Idiomas.</li>
                <li>(RD 967/1988, de 2 de septiembre).</li>
                <li>(De la misma lengua extranjera que se desea convalidar).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado de Nivel Intermedio (B1), o superior, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</li>
                <li>(De la misma lengua extranjera que se desea convalidar).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Título de Grado, o equivalente, en Filología o en Traducción e Interpretación.</li>
                <li>(De la misma especialidad que la lengua extranjera que se desea convalidar).</li>
              </ul>
            </td>
          </tr>
        </table>
          {/* tarjeta */}
          
        </div>
        <div className="rounded-md border-2  p-4 mt-4 border-orange-950 bg-yellow-100 text-orange-900" >
          <h1 className="flex justify-center mb-4"><b>Para saber más</b></h1>
          <p>Por tanto, no es posible, <b className="bg-yellow-300">EN NINGÚN CASO</b>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>
    <Nav posicion={9} />
  </div>
  );
}
