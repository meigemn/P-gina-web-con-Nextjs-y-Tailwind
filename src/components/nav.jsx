import Link from "next/link";
import MenuPrincipal from "./menu-principal";

function Nav({ posicion}) {
    return (
        <div className="p-4 text-right ">
            {/**Los links son elementos inline */}
            <Link href={slug(MenuPrincipal[posicion-1])} className="text-2xl text-blue-500 mr-1 bg-blue-200 rounded-md p-4">Anterior</Link>
            <Link href={slug(MenuPrincipal[posicion+1])} className="text-2xl text-blue-500 mr-1 bg-blue-200 rounded-md p-4">Siguiente</Link>
        </div>
    );
}
export default Nav;
