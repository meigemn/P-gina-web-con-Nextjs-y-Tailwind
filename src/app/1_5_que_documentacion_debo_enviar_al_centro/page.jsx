import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.5 Que documentación debo enviar al centro",
}; export default function Home() {
  return (
    <div className=" flex flex-col">
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      {/* principal */}
      <div className="mt-8 ml-4">
        <div>{/* primer parrafo */}
          <p>
            Debes presentar la solicitud de convalidación de módulos profesionales,
            acompañada de la documentación establecida correspondiente, en el centro.
            <b>En ningún caso puedes enviar por tu cuenta la solicitud al Ministerio.</b>
          </p>
          <div className="mt-4 ml-8">{/* segunda seccion */}
            <p>
            ✔️ Solicitud de convalidación que encuentras en este enlace
              (ver Impreso solicitud convalidación módulos profesionales).
              En ese documento es imprescindible que cumplimentes todos los apartados.
              En este enlace puedes consultar los módulos de cada ciclo impartido con
              su nombre y el código exacto. Para ello, debes desplegar dentro de cada
              centro, el apartado Módulos ofertados de este ciclo.
              Recuerda que el plazo para enviar la solicitud de convalidación
              concluye a finales de octubre.
            </p>
            <p className="mt-4">
            ✔️ Fotocopia del Documento Nacional de Identidad (DNI) o fotocopia del Pasaporte
              o de la Tarjeta de Extranjero/a o del Permiso de Residencia
              (temporal o definitivo) o del Visado de Estudios.
            </p>
            <p className="mt-4">
            ✔️ Además, debe incluirse la siguiente documentación, ya sea original o
              fotocopia compulsada (recuerda que puedes compulsar un documento en
              cualquier Administración Pública que cuente con registro simplemente
              presentando la copia y enseñando el original):
            </p>
            <div className="mt-4 ml-8">
              <p>
              ➔Certificación académica oficial expedida por el centro docente donde has cursado los estudios que alegas.
                En el caso de estudios universitarios, es obligatorio presentar original o fotocopia compulsada de la certificación
                académica oficial, con indicación de las horas o créditos de cada materia superada.
              </p>
              <p>
              ➔En el caso de alegar un título que acredite la formación previa alegada, debes presentar el título oficial o
                resguardo de haberlo solicitado. En el caso de que desees convalidar alegando haber cursado otro ciclo formativo,
                es suficiente con el certificado académico de notas y no es necesario que adjuntes también la copia del título o
                el resguardo de haberlo solicitado.
              </p>
              <p>
              ➔En el caso de alegar enseñanzas universitarias, además de la certificación académica oficial con indicación de las
                horas o créditos de cada materia superada, deberás presentar los programas de las asignaturas que haya cursado sellados
                (el sello debe ser original y no vale una fotocopia del programa en el que el sello no sea original) por el centro universitario.
                Estos programas deben recoger la duración y contenidos teóricos y prácticos estudiados.
              </p>
              <p>
              ➔En el caso de alegar unidades de competencia oficialmente acreditadas, certificación oficial de la acreditación de la Unidad de
                Competencia o Certificado de profesionalidad expedido por la Administración Laboral competente, obtenido de acuerdo con lo establecido
                en el RD 34/2008, de 18 de enero.
              </p>
            </div>
            <div className="mt-4">
              <p>
                <b>Aunque ya se ha dicho anteriormente, se recuerda que todos los documentos (excepto el DNI y el documento de la solicitud de convalidación)
                  tienen que ser original o copia compulsada. También se recuerda que el centro no puede tramitar ante el Ministerio de Educación ninguna
                  solicitud que no venga acompañada de la documentación establecida.</b>
              </p>
            </div>
            <div className="mt-4">
              <p>
                <b>El solicitante deberá estar matriculado en los módulos profesionales que solicita convalidar y haber satisfecho los derechos de matrícula
                  en las enseñanzas para las cuales solicita la convalidación.</b>
              </p>
            </div>
            <div className="mt-4">
              <p>
                <b>Las convalidaciones entre estudios universitarios y de Formación Profesional se podrán solicitar cuando estos últimos pertenezcan al espacio
                  de la educación superior.</b> Además, el número de módulos profesionales de los ciclos de grado superior convalidados <b>no podrá superar el 60% de la totalidad de créditos
                    ECTS </b>establecidos en el real decreto por el que se establece el título Técnico Superior y se fijan los aspectos básicos del currículo, siempre que se aporten <b>enseñanzas universitarias que estén relacionadas con el campo de conocimiento y exista similitud entre las competencias, conocimientos y resultados de aprendizaje.</b>
              </p>
            </div>
          </div>
        </div>
        {/* imagen */}
        <div className=" mt-4 flex justify-center ml-24  w-1/2">
          <Image layout='responsive'src='/documento.png' alt="documento" width="50" height="50" ></Image>
        </div>
      </div>
      <Nav posicion={15} />
    </div>
  );
}
