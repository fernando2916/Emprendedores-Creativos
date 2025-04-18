import LayoutPrincipal from "@/layouts/layout";
import { Head } from "@inertiajs/react";

import LogoESR from '@/assets/logo_ESR.jpg'
import { FaCircle } from "react-icons/fa";

export default function index() {
  return (
    <LayoutPrincipal>
      <Head title="Responsabilidad Social |"/>
     
     <div>
      <div className="justify-center items-center mx-10 pt-5">
        <div className="flex flex-col justify-center items-center mx-auto">
        <h3 className="text-3xl font-bold justify-center">
            Responsabilidad social
          </h3>
          <img src={LogoESR} alt="logo src" className="mt-4 w-52" />
        </div>
        <div className="space-y-5 my-5 text-justify p-5 rounded-md bg-slate-300 dark:bg-cont-100">
          <p>
            Somos una empresa altamente comprometida con la responsabilidad
            social, prueba de ello es que hemos obtenido el Distintivo de
            Empresa Socialmente Responsable por 3 años consecutivos. Nuestra
            estrategia se basa en reconocer la naturaleza de nuestro negocio y
            desarrollar iniciativas sociales que ayuden a mejorar la calidad de
            vida de nuestros consumidores.
          </p>
          <p>Todo esto a través de 3 ejes prioritarios.</p>
          <ul className="space-y-3">
           <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      <span className="font-semibold">Gestión: </span>
                      Nuestras acciones de responsabilidad social forman parte de un proceso de mejor continua interna que nos ayuda a conocer nuestras áreas de oportunidad y potencializarlas.
                    </p>
             </li>
           <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      <span className="font-semibold">Social: </span>
                      En las comunidades donde operamos trabajamos con distintas organizaciones sociales para apoyar con diversos tipos de donativos en especie.
                    </p>
             </li>
           <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      <span className="font-semibold">Ética: </span>
                      Nos aseguramos de que todos nuestros procesos productivos y nuestra cadena de valor se guíe por estándares de honestidad, integridad y profesionalismo.
                    </p>
             </li>
          </ul>
        </div>
      </div>
     </div>
    </LayoutPrincipal>
  )
}
