import { FaAngleRight, FaCheck, FaUserShield } from "react-icons/fa"
import {Link} from '@inertiajs/react'
import hero from '@/assets/Hero.png'
export const HeaderPriv = () => {
  return (
    <section>
      <div className="relative w-full z-20">
        <div className="flex items-center justify-end max-w-7xl mx-5 md:mx-auto mt-5 gap-2">
          <FaUserShield />
          <Link href='/privacidad/resumen'>
            <h3 className="text-link-300 dark:text-link-100">Ir a la Delcaración de privacidad</h3>
          </Link>
          <FaAngleRight/>
          </div>
        <div className="grid md:grid-cols-12 mx-5 max-w-7xl md:mx-auto">
          <div className="col-span-6 md:p-10 mt-5 space-y-3">
            <div className="">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Centro de privacidad Emprendedores Creativos
              </h2>
              <p className=" text-justify text-sm md:text-lg lg:text-xl">
                Te contamos cómo usamos y protegemos tus datos personales para
                mejorar nuestros servicios y ofrecerte una experiencia
                personalizada.
              </p>
            </div>
            <div>
              <ul className="flex flex-col md:flex-row justify-between gap-2 text-sm lg:text-lg">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Administra el uso de tus datos
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Conoce tus derechos
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6">
          <img src={hero} alt="" className="p-10 w-96"/>
          </div>
        </div>
      </div>
    </section>
  )
}
