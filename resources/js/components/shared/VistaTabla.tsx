import { Link } from "@inertiajs/react"
import { FC, ReactNode } from "react"

interface props {
  title: string,
  href: string,
  icon: ReactNode,
  nombre: string,
  children: ReactNode,
}


export const VistaTabla: FC<props> = ({title, nombre, children, href, icon}) => {
  return (
    <div className="flex h-full w-auto flex-1 flex-col gap-4 rounded-xl">
      <div className="flex justify-between mb-10 p-5">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <Link href={href}>
        <button className="flex justify-center items-center gap-2 bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 cursor-pointer" type="button">
          {icon}
          {nombre}
        </button>
        </Link>
      </div>
      {children}
    </div>
  )
}
