import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
export const metadata = {
  title: "1.2.3-Condiciones para convalidar Inglés",
}; export default function Home() {
  return (
    <div className="flex flex-col">
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <div className="mt-8 ml-4">
        <p>La documentación a aportar varía en función del módulo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>
      </div>

      <div className="flex justify-center mt-4 w-[700px] m-auto" >{/* tabla */}
          <table className=" table-auto border-collapse  ">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border-b bg-blue-200">Módulo a Convalidar</th>
                <th className="px-4 py-2 border-b bg-blue-200">Formación a Aportar</th>
              </tr>
            </thead>
            <tbody>
              {/* primer apartado*/}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>0156 Inglés</b></td>
                <td className="px-4 py-2">Lengua Extranjera LOGSE (duración de 65 horas, según el Real Decreto que establece el título de formación profesional y sus enseñanzas mínimas) Cuando la lengua extranjera cursada y superada sea inglés.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Lengua Extranjera LOGSE o de la C.A. Cuando la lengua extranjera cursada y superada sea inglés</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Módulos Profesionales de Lengua Extranjera LOGSE de ciclos formativos de Grado Superior, en cualquiera de sus denominaciones, siempre que sea la misma que la que se desea convalidar.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado del Ciclo Elemental, de Inglés, de la Escuela Oficial de Idiomas.(RD 967/1988, de 2 de septiembre).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas. (RD 967/1988, de 2 de septiembre).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Título de Grado, o equivalente, en Filología Inglesa</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">0179 Inglés.</td>
              </tr>
              {/* segundo apartado */}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>0179 Inglés</b></td>
                <td className="px-4 py-2">Lengua Extranjera LOGSE (Inglés).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Lengua Extranjera (duración de 90 horas, según reales decretos por los que se establecen los títulos de formación profesional y sus enseñanzas mínimas) Cuando la lengua extranjera cursada y superada sea inglés</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Lengua Extranjera en Comercio Internacional. Cuando la lengua extranjera cursada y superada sea inglés.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas. (RD 967/1988, de 2 de septiembre).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Título de Grado, o equivalente, en Filología Inglesa</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* tarjeta */}
        <div className="rounded-md border-2  p-4 mt-4 border-orange-950 bg-yellow-100 text-orange-900" >
          <h1 className="flex justify-center mb-4"><b>Para saber más</b></h1>
          <p>Por tanto, no es posible, <b className="bg-yellow-300">EN NINGÚN CASO</b>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>
        <Nav posicion={8} />
    </div>
  );
}
