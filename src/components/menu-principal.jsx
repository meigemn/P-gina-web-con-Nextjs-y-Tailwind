/**Para que no den error, usamos 'use client' para marcar algunos componentes como cliente, para poder usar estados y eventos  */
'use client';
import { menu, slug } from "../lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const classLink = "block bg-blue-100 p-2 rounded-md mb-1 hover:bg-blue-300"
//para que no salga la flecha quitamos el classname del link*/
//en el summary quitamos la propiedad de classname "block para que funcione la flecha"
function MenuPrincipal() {
    {/*variable que guarda el estado, y variable que modifica el estado*/ }
    const [abierto, setAbierto] = useState(true);
    return (
        <>
            {abierto ?
                <X
                    onClick={() => setAbierto(false)}
                    className="fixed top-5 right-5 bg-blue-100 size-14 rounded-md" />
                :
                <Menu
                    onClick={() => setAbierto(true)}
                    className="fixed top-5 right-5 bg-blue-100 size-14 rounded-md" />
            }
            {abierto &&
                <aside className="w-[300px] bg-blue-200 shrink-0 overflow-y-auto p-3 br-[rgba(4,64,133,.5)] rounded-lg mx-2 my-2 ">
                    <Link className={`${classLink}`} href={slug(menu[0])}> {menu[0]} </Link>
                    <details>
                        <summary className=" bg-blue-100 hover:bg-blue-300 rounded-md mb-1 p-2">
                            <Link href={slug(menu[1])}> {menu[1]} </Link>
                        </summary>
                        <details>
                            <summary className=" bg-blue-100 p-2 rounded-md mb-1">
                                <Link href={slug(menu[2])}> {menu[2]} </Link>
                            </summary>
                            <Link className={`${classLink} ml-4`} href={slug(menu[3])}> {menu[3]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[4])}> {menu[4]} </Link>
                        </details>
                        <details>
                            <summary className=" bg-blue-100 p-2 rounded-md mb-1">
                                <Link href={slug(menu[5])}> {menu[5]} </Link>
                            </summary>
                            <Link className={`${classLink} ml-4`} href={slug(menu[6])}> {menu[6]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[7])}> {menu[7]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[8])}> {menu[8]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[9])}> {menu[9]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[10])}>{menu[10]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[11])}>{menu[11]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[12])}>{menu[12]}</Link>
                        </details>
                        <Link className={`${classLink} ml-2`} href={slug(menu[13])}>{menu[13]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[14])}>{menu[14]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[15])}>{menu[15]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[16])}>{menu[16]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[17])}>{menu[17]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[18])}>{menu[18]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[19])}>{menu[19]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[20])}>{menu[20]}</Link>
                    </details>
                    <details>
                        <summary className=" bg-blue-100 p-2 rounded-md mb-1">
                            <Link href={slug(menu[21])}>{menu[21]}</Link>
                        </summary>
                        <Link className={`${classLink} ml-2`} href={slug(menu[22])}>{menu[22]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[23])}>{menu[23]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[24])}>{menu[24]}</Link>
                    </details>
                </aside>
            }
        </>

    )
}
export default MenuPrincipal;