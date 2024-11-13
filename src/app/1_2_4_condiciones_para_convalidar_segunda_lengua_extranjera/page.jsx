import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.4-Condiciones para convalidar Segunda Lengua Extranjera",
};export default function Home() {
  return (
    <div className="flex flex-col">
    <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}

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
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>2ª Lengua Extranjera LOGSE</b></td>
                <td className="px-4 py-2">MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma que la que se desea convalidar.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Nivel Intermedio (B1), equivalente o superior, de la Escuela Oficial de Idiomas (RD 1629/2006, de 29 de diciembre) siempre que sea de la misma lengua extranjera que la que se desea convalidar.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2"> Título de Grado en Filología o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Título de Grado Traducción e Interpretación, o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.</td>
              </tr>
              {/* segundo apartado */}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>0180 2ª Lengua Extranjera.</b></td>
                <td className="px-4 py-2"> Segunda Lengua Extranjera LOGSE. Cuando la lengua extranjera cursada y superada sea la misma que se desea convalidar.</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado del Ciclo Elemental o de Aptitud, de la Escuela Oficial de Idiomas. (RD 967/1988, de 2 de septiembre). (De la misma lengua extranjera que se desea convalidar).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Certificado de Nivel Intermedio (B1), o superior, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre). (De la misma lengua extranjera que se desea convalidar).</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b></b></td>
                <td className="px-4 py-2">Título de Grado, o equivalente, en Filología o en Traducción e Interpretación. (De la misma especialidad que la lengua extranjera que se desea convalidar).</td>
              </tr>
            </tbody>
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
