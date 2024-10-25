import Link from "next/link";
import { menu, slug } from "@/lib/utils";

/**
 * 
 * 
 */
function Nav({ posicion}) {
    return (
        <div className="p-4 text-right ">
            { posicion > 0 &&
                <Link href={slug(menu[posicion-1])} >
                    <button className="bg-blue-100 p-1 rounded-l-full font-bold hover:bg-blue-200 transition duration-200 ml-0.5 text-blue-900"> {'<<'}Anterior </button>
                </Link>
            }

            { posicion < menu.length-1 &&
                <Link href={slug(menu[posicion+1])} >
                    <button className="bg-blue-100 p-1 rounded-r-full font-bold hover:bg-blue-200 transition duration-200 ml-0.5 text-blue-900">Siguiente {'>>'} </button>
                </Link>
            }
            
        </div>
    );
}
export default Nav;