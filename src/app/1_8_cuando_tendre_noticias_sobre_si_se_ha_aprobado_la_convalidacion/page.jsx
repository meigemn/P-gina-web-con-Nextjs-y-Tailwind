import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
export const metadata = {
  title: "1.8 Cuando tendre noticias sobre si se ha aprobado la convalidación",
}; export default function Home() {
  return (
    <div className="flex flex-col ">
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}
      <div className="mt-8 ml-8">{/* primeros dos parrafos */}
        <div className="mt-8 ">
          <p>
          ✔️En primer lugar, hay que recordar que solo se pueden convalidar módulos
            en los que estás debidamente matriculado. La matrícula solo se da por
            finalizada cuando concluya el pago de las tasas. Por tanto, hasta que
            el centro no tenga constancia del pago, no se podrá proceder a reconocer
            la convalidación. De esta forma, si el pago se retrasa cabría la
            posibilidad de que la resolución de la convalidación también se
            retrasara.
          </p>
        </div>
        <div className="mt-8 ">
          <p>
          ✔️Si la convalidación la debe resolver el Ministerio, el plazo se alarga más,
            ya que no se puede remitir la documentación a ese organismo hasta tener la
            constancia del pago realizado. En los últimos años, la resolución del
            Ministerio ha llegado bien entrado el año nuevo. Por eso es conveniente
            que presentes tu solicitud lo antes posible. Una vez resuelta la
            convalidación, el Ministerio de Educación y Formación Profesional
            se pondrá directamente en contacto contigo, a través del correo
            electrónico que hayas facilitado en la solicitud de convalidación
            , para comunicarte el resultado y para que te descargues la resolución
            desde su Sede Electrónica. Si te han concedido la convalidación, deberás
            presentar la resolución en el centro para que la anoten en tu expediente
            académico. Es en este momento, y no antes, cuando tienes formalmente el
            módulo convalidado.
          </p>
        </div>
      </div>
      <div className="mt-8 ml-4">{/* ultimo bloque */}
        <p>
          <b>El Ministerio informa que se debe empezar a trabajar el módulo, con independencia de haber solicitado la convalidación, por si al llegar la resolución esta es negativa.  Durante el tiempo que el Ministerio informe al alumno/a de la resolución de la convalidación del módulo solicitado, es imprescindible que participe en las actividades a distancia (entrega de tareas, participación en foros, etc.) como obligación dentro del proceso de evaluación continua.</b>
        </p>
      </div>
      {/* imagen */}
      <div className="mx-auto flex justify-center w-[800px] mt-8" >
        <Image layout='responsive'src='/calendario.jpg' alt="calendario" width="50" height="50"></Image>
      </div>
      <Nav posicion={18} />
    </div>
  );
}
