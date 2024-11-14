import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.6 Como conseguir el programa de una asignatura universitaria",
}; export default function Home() {
  return (
    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <div className="mt-8 ml-4">
        <p>
          Las convalidaciones <b>basadas en una o varias asignaturas universitarias no se resuelven en el centro,
            solo se reciben y envían al Ministerio para su resolución.</b> La experiencia nos dice que debes respetar los requisitos establecidos por el Ministerio.
        </p>
      </div>
      <div className="mt-8 ml-4">
        <p>
          Además de la certificación académica oficial, el <b>Ministerio exige que presentes los programas de las
            asignaturas sellados originalmente por la universidad. Este último requisito es indispensable. En caso de que no se envíen los programas sellados,
            no se podrá enviar la solicitud de convalidación. No importa si presentas el título universitario y el certificado:</b>  sin programas sellados no hay convalidación.
        </p>
      </div>
      <div className="mt-8 ml-4">
        <p>
          ¿Cómo conseguir los programas sellados? Es posible que hayas perdido los programas de cuando estudiaste en
          la Universidad, o si los tienes que no estén sellados, o en el peor de los casos, que ya no vivas ni siquiera
          donde estudiaste y no puedas desplazarte. Por eso no hay problema, siempre que tengas un poco de paciencia y
          uieras hacer lo que te proponemos, es muy probable que los consigas y puedas presentar tu solicitud de convalidación acompañada de los programas.
        </p>
      </div>
      <div className="mt-8 ml-4">
        <p>
          Para ello, sigue los siguientes pasos:
        </p>
        <div className="mt-8 ml-4">
          <p>✔️Haz una lista de las asignaturas relacionadas con el módulo que quieres convalidar.</p>
          <p>✔️Selecciona los departamentos responsables de esas asignaturas.</p>
          <p>✔️Entra en la web de la Universidad en la que estudiaste y busca los departamentos del apartado anterior. Localiza el teléfono del jefe/director del departamento y la dirección de correo.</p>
          <p>✔️ Contacta por teléfono con el departamento y/o envía un correo con la siguiente información:</p>
        </div>
        {/* ejemplo */}
        <div className="mt-8 ml-4">
          <br />
          <p className=""><i>Buenos días.</i></p>
          <br />
          <p><i>Mi nombre es XXXX. Cursé la licenciatura/diplomatura/grado en XXX en la Facultad de XXXX Promoción 20XX-20XX y actualmente curso otros estudios para los que necesito el programa sellado por el 
          centro universitario en cuestión de las siguientes asignaturas:</i>
          </p>
          <br />
          <p>
          <i>XXXXX. curso, 20XX-20XX</i>
          </p>
          <br />
          <p>
          <i>XXXXX. curso, 20XX-20XX</i>
          </p>
          <br />
          <p>
          <i>Les agradecería si me pudiesen decir cómo conseguirlo o si me lo pudiesen enviar a la siguiente dirección: XXXX</i>
          </p>
          <br />
          <p>
          <i>De no ser así, dígame cómo puedo hacerlo.</i>
          </p>
          <br />
          <p><i>De nuevo, gracias por su amabilidad.</i></p>
          <br />
          <p><i>Saludos cordiales.</i></p>
        </div>
      </div>
      <Nav posicion={16} />
    </div>
  );
}
