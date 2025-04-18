import { Link, usePage } from "@inertiajs/react"
import { FaAngleRight } from "react-icons/fa";


interface Props {
  Nombre: string;
  href: string;
  path: string;
  Pantalla: string;
}

export const Indicador = ({Nombre, href, path, Pantalla}: Props) => {
  const page = usePage();
  // const path = ide
  return (
    <div className="flex gap-1 items-center">
      <Link className="text-link-100" href={href}>
      {Nombre}
      </Link>
    {page.url === path ? (
      <>
      <FaAngleRight/>
      <span>{Pantalla}</span>
      </>
    ): (
      <>
      ""
      </>
    )}
    </div>
  )
}
