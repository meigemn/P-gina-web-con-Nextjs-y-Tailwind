import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";

export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
};

export default function Home() {
  return (
    <div>
      <header>
        <Titulo>{metadata.title}</Titulo>
      </header>

      <main className="p-4 mx-4 mt-4 text-blue-950">
        <div className="flex flex-col items-start md:flex-row">
          <div>
            <p>
              Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación.
              La convalidación es el procedimiento por el cual se reconoce como superado un módulo que contiene los contenidos del módulo,
              módulos profesionales, asignatura o unidad de competencia que se aporta. La exención solo se aplica al módulo profesional
              de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable y de duración definida.
              El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado y superado..
            </p>
            <p className="mt-8 flex flex-row">
              A continuación, se muestra información tutorial que esperamos que te sea de utilidad.
            </p>
          </div>
          <div className="mx-auto flex justify-center w-[200px] mt-8 w-[1000px] h-40">
            <Image src="/tutor-and-student.png" alt="imagen balanza" width="900" height="70" />
          </div>
        </div>
        <div className="flex flex-col mt-8 ">
          <table>
            <tr>
              <th>Elaborado por:</th>
              <td>Dirección General de Formación Profesional</td>
            </tr>
            <tr>
              <th>Versión:</th>
              <td>5</td>
            </tr>
            <tr >
              <th className="bg-blue-200">Fecha de publicación:</th>
              <td>3/03/2022</td>
            </tr>
          </table>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>

      <Nav posicion={0} />
    </div>
  );
}