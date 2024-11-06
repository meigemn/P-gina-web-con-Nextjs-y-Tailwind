import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
export const metadata = {
  title: "1. Solicitud de convalidaciones",
};export default function Home() {
  return (
    <div>
      <header>
        <Titulo>{metadata.title}</Titulo>
      </header>
      <main className="bg-blue-200 rounded-lg p-4 mt-8 ml-4  text-blue-950">
        <p>Aquí encontrarás información acerca de cómo solicitar la convalidación de un módulo profesional y la exención del módulo de Formación en Centros de Trabajo.</p>
        <div className="mx-auto flex justify-center w-[200px] mt-8">
        <Image layout='responsive'src='/balanza.png' alt="imagen balanza" width="50" height="50"></Image>
        </div>
      </main>
      <Nav posicion={1}/>
    </div>
  );
}
