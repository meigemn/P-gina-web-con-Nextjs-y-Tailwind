import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

import Image from 'next/image';
export const metadata = {
  title: "1.1.2. ¿Que estudios puedo alegar?",
}; export default function Home() {
  return (
    <div>
      <Titulo>{metadata.title}</Titulo>{/**Importamos el componente Titulo */}

      <div className="ml-8 mt-8">
        <p>
          ✔️ Para solicitar la convalidación de módulos profesionales de un ciclo formativo de FP <b>se pueden alegar enseñanzas </b> cursadas dentro <b>del Sistema Educativo</b>  y Unidades de Competencia acreditadas. Por tanto, se puede aportar:
        </p>
        <p className="ml-8">➡️<b>Otros ciclos formativos</b> de Formación Profesional de grado medio o superior cursados con anterioridad.
          <p><b>Enseñanzas universitarias</b>: diplomaturas, licenciaturas, grados.</p>
          <p>➡️Las <b>antiguas enseñanzas de Formación Profesional</b> de primer y segundo grado (títulos de Técnico auxiliar y Técnico especialista).</p>
          <p>➡️Ciclos formativos de <b> Enseñanzas deportivas</b> o de <b>Artes Plásticas y Diseño</b>. </p>
          <p>➡️Certificaciones académicas Oficiales de idioma (del mismo idioma que se solicita la convalidación y de nivel idóneo).</p>
          <p>➡️Unidades de Competencia acreditadas.</p>
        </p>
        <div className=" mt-8">
          <p>✔️ Las enseñanzas siguientes no se pueden alegar:</p>
          <div className="ml-8">
            <p>➡️ <b>Carnés profesionales y cursos de Formación Profesional para el empleo (FPO y FP continua)</b>, distintos de los que conducen a la obtención de un Certificado de profesionalidad y a la acreditación oficial de unidades de competencia.</p>
            <p>➡️ <b>Cursos privados</b> realizados en academias y centros de formación que no imparten enseñanzas oficiales.</p>
            <p>➡️ <b>Cursos propios impartidos en la Universidad</b>, que no sean másteres oficiales como los cursos de experto, cursos de especialización, ...</p>
            <p>➡️ <b>Títulos propios no oficiales de universidad.</b></p>
            <p>➡️ <b>Certificados de idiomas no oficialmente aceptados</b>.</p>
            <p>➡️ <b>Experiencia laboral.</b></p>
            <p>➡️ <b>Formación no formal</b>.</p>
            <p>➡️ <b>Titulaciones extranjeras homologadas</b>.</p>
            <p>➡️ <b>Títulos equivalentes LOGSE</b>.</p>
            <p>➡️ <b>Formaciones de otros ministerios que tienen concedida por normativa la equivalencia general o específica</b>.</p>
          </div>
        </div>
        <div className="mt-8">
          <p>✔️ Los módulos profesionales que hayan sido previamente convalidados no podrán ser alegados para convalidar.
            Solo se puede alegar materias que hayan sido cursadas y superadas. Los títulos extranjeros homologados tampoco podrán ser causa de una nueva
            convalidación con otros módulos profesionales.</p>
        </div>
        <div className="mt-8">
          <p>
          ✔️Los <b>estudios que tengan concedida la equivalencia específica o genérica <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/quiero-formarme/posibilidades-tras-formarme/equivalencias/tabla-equivalencias" className="text-blue-600 underline">(aquí los tenéis)</a></b>, 
          a efectos académicos y/o profesionales,
            con títulos de Formación Profesional <b>no podrán ser utilizados a su vez para la convalidación de sus módulos profesionales</b>; por tanto,
            quien haya superado la totalidad de un ciclo formativo LOGSE no podrá aportarlo para solicitar la convalidación de ningún módulo profesional del título
            LOE equivalente que lo sustituye. Las convalidaciones que aparecen recogidas en el anexo IV del Real Decreto que regula cada título están reservadas para
            quien no ha podido finalizar el ciclo formativo que se extingue y debe transitar al nuevo ciclo formativo equivalente,
            o para quien solicita dichas convalidaciones para un título diferente de aquel con el que se ha declarado la equivalencia.
          </p>
        </div>
        <div className="mt-8">
          <p>
          ✔️Haber cursado enseñanzas superiores no siempre da derecho a la convalidación de enseñanzas relacionadas, pero de menor nivel,
          aunque en ambas haya materias con nombres similares.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center w-[800px] mt-8">
      <Image layout='responsive'src='/imagen-profesor-ordenadores.jpg' alt="imagen-aula-ordenadores" width="50" height="50"></Image>
      </div>
      <Nav posicion={4} />
    </div>
  );
}
