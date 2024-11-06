import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "1.1.1 ¿Que necesito para poder convalidar?",
};export default function Home() {
  return (
<div>
  <header>
    <Titulo>{metadata.title}</Titulo>
  </header>
  <main className="bg-blue-200 rounded-lg p-4 mx-4 mt-4 text-blue-950">
  <p className="mb-4 mx-4">La primera condición:</p>
    <p className="mb-4 justify-end  mx-12">
      ✅ Si eres alumno de SEMI o distancia: <b>estar matriculado/a en el módulo que se desea convalidar</b> y realizar el pago de las tasas correspondientes. Hasta que no se realice y se compruebe el pago, no se podrá ejecutar la convalidación en el expediente. 
      De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasara.
    </p>
    <p className="mb-4 mx-4">    
      La <b>convalidación no se realiza sobre la globalidad del Título</b> que se está cursando, sino sobre los módulos que se soliciten, si estos cumplen las condiciones para ello.
    </p>
  </main>
  <nav>
    <Nav posicion={3} />\
  </nav>
</div>
  );
}
