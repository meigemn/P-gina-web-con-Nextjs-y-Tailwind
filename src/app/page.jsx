import { redirect } from "next/navigation";
import {menu,slug} from "../lib/utils";
export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
};export default function Home() {
  redirect(slug(menu[0]))
  return (
    <div>

    </div>
  );
}
