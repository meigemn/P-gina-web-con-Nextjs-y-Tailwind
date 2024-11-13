import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

export const metadata = {
  title: "1.2.2-Condiciones para convalidar Empresa e Iniciativa Emprendedora",
}; export default function Home() {
  return (
    <div>
      <div>
        <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
        <div className="mt-8 ml-4">
          <p>Para poder convalidar el módulo de <b>Empresa e Iniciativa Emprendedora</b>  es necesario acreditar alguna de las siguientes condiciones:</p>
          <div className="ml-8">
            <p>✔️Tener <b> aprobado el módulo de Empresa e Iniciativa Emprendedora de otro ciclo formativo</b>, cualquiera que sea el grado, incluso en grados cruzados -medio o superior-.</p>
            <p>✔️Tener <b>aprobado el módulo de Administración, gestión y comercialización en la pequeña empresa</b>  (o con una denominación similar).</p>
            <p>✔️<b>Poseer el Título de Técnico en Gestión administrativa o Técnico superior en Administración y finanzas</b></p>
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
              {/* primer apartado*/}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>Empresa e Iniciativa Emprendedora.(Cualquier ciclo formativo)</b></td>
                <td className="px-4 py-2">Administración, gestión y comercialización en la pequeña empresa.(Cualquier ciclo formativo)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">FOrganización y gestión de una explotación agraria familiar Ciclo Trabajos Forestales y de Conservación del Medio Natural. (RD 1713/1996, de 12 de julio). (Agraria)
                  Ciclo Jardinería. (RD 1714/1996, de 12 de julio). (Agraria)
                  Ciclo Explotaciones Agrarias Extensivas. (RD 1715/1996, de 12 de julio) (Agraria)
                  Ciclo Explotaciones Agrícolas Intensivas. (RD 1716/1996, de 12 de julio). (Agraria)
                  Ciclo Explotaciones Ganaderas. (RD 1717/1996, de 12 de julio).  (Agraria)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Ciclo completo de Gestión administrativa. (RD 1662/1994, de 22 de julio). (Administración y Gestión)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Administración, gestión y comercialización en la pequeña empresa.(Cualquier ciclo formativo)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Organización y gestión de una pequeña empresa de actividades de tiempo libre y socioeducativas.Ciclo Animación Sociocultural. (Servicios Socioculturales y a la Comunidad) Ciclo Animación de Actividades Físicas y Deportivas. (Actividades Físicas y Deportivas) Ciclo Animación Turística. (Hostelería y Turismo)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2"> Organización y control en agencias de viajes. Ciclo Agencias de Viajes. (Hostelería y Turismo)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2"> Administración de establecimientos de restauración. Ciclo Restauración. (Hostelería y Turismo)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2"> Administración y gestión de una unidad/gabinete de Ortoprotésica. Ciclo Ortoprotésica. (Sanidad)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2"> Organización, administración y gestión de una unidad/gabinete de prótesis dentales. Ciclo Prótesis Dentales. (Sanidad)</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Administración y gestión de un gabinete audioprotésico. Ciclo Audioprótesis. (Sanidad) </td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Organización y gestión de una empresa agraria. Ciclo Gestión y Organización de los Recursos Naturales y Paisajísticos. (Agraria) Ciclo Gestión y Organización de Empresas Agropecuarias. (Agraria) </td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Ciclo completo de Administración y finanzas. (RD 1659/1994, de 22 de julio). (Administración y Gestión) </td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Técnico en Gestión Administrativa LOE. Ciclo completo</td>
              </tr>
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200"></td>
                <td className="px-4 py-2">Técnico en Superior en Administración y Finanzas LOE. Ciclo completo</td>
              </tr>
              {/* segundo formato */}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>0402. Empresa e iniciativa emprendedora.</b></td>
                <td className="px-4 py-2">Gestión económico-administrativa en agencias de viajes.Organización y control en agencias de viajes.</td>
              </tr>
              {/* tercer formato */}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>0863. Empresa e iniciativa emprendedora.</b></td>
                <td className="px-4 py-2">Organización, administración y gestión de una unidad/gabinete de prótesis dentales.</td>
              </tr>
              {/* cuarto formato */}
              <tr className="border-b ">
                <td className="px-4 py-2 bg-blue-200 w-40" > <b>Empresa e Iniciativa Emprendedora.(Cualquier ciclo formativo LOE)</b></td>
                <td className="px-4 py-2">Empresa e Iniciativa Emprendedora.(Cualquier ciclo formativo LOE)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Nav posicion={7} />
      </div>
    </div>
  );
}
