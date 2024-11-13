import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.2.5-Condiciones para convalidar Horas de Libre Configuración",
}; export default function Home() {
  return (
    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <div className="ml-4 mb-4">
        <p >
        El módulo profesional de <b>Horas de Libre Configuración no puede ser objeto de convalidación.</b>
        </p>
      </div>
      <div className="ml-4">
        <p>
        Este módulo profesional no se evalúa de manera independiente al estar asociado a otro módulo profesional a efectos de evaluación. Cuando un alumno o alumna obtiene la convalidación de este otro módulo profesional (o lo haya superado con anterioridad), queda exento de cursar el de Horas de Libre Configuración.
        </p>
      </div>

      <Nav posicion={10} />
    </div>
  );
}
