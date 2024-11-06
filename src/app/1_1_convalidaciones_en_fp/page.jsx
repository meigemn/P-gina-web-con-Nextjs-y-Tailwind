import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.1 Convalidaciones en FP",
};export default function Home() {
  return (
    <div>
      <header>
        <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      </header>
      <main className="mx-4">
        <div className="mx-auto flex justify-center w-[500px] h-[300px] mt-8">
          <Image layout='responsive'src='/imagen-aula.jpg' alt="imagen balanza" width="50" height="50"></Image>
        </div>

        <section className="mx-auto flex justify-center space-y-8 flex-col  mt-8">
          <p>La Subdirección General de Ordenación e Innovación de la Formación Profesional del Ministerio de Educación y Formación Profesional, 
            informa que el <b>plazo de presentación de solicitudes de convalidaciones de los alumnos en el centro se inicia el día que comienza el curso escolar 
            y finaliza el último día del curso escolar.</b> Tratándose con preferencia los expedientes presentados desde el inicio del plazo de matriculación hasta 
            la finalización del mes de octubre.
          </p>
          <p>
            Este plazo es revisado de forma estricta por el Ministerio acogiéndose al Real Decreto 1085/2020, de 9 de diciembre, por el que se establecen convalidaciones 
            de módulos profesionales de los títulos de Formación Profesional del sistema educativo español y las medidas para su aplicación, y se modifica el 
            Real Decreto 1147/2011, de 29 de julio, por el que se establece la ordenación general de la formación profesional del sistema educativo, regula en su Capítulo II  
            el Procedimiento para las convalidaciones.
          </p>
          <p>
          Por todo ello, <b>os informamos a todas aquellas personas que deseen solicitar una convalidación que sea competencia del Ministerio de Educación que envíe la documentación 
          correspondiente en el plazo más breve de tiempo posible con el fin de comprobar la ausencia de errores y así poder iniciar el trámite lo antes posible.</b>
          </p>
          <p>
          Las solicitudes de convalidaciones cuya resolución corresponden al director/a del centro docente donde esté matriculado el alumno se presentarán durante el mes de octubre.
          </p>
          <p>
            <b>Solo se podrá presentar una única solicitud de convalidación por curso académico.</b>
          </p>
          <p>
            <b>ES MUY IMPORTANTE QUE TODA LA DOCUMENTACIÓN SEA CORRECTA Y ESTÉ COMPLETA.</b>
          </p>
        </section>

      </main>
      <nav>
        <Nav posicion={2} />
      </nav>
    </div>
  );
}
