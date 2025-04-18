import { Link } from "@inertiajs/react"
import { FaAngleRight, FaCheck } from "react-icons/fa"
import PersonalData from '@/assets/PersonalData.svg'

export const ManageYourPersonal = () => {
  return (
    <section className=" bg-slate-300 dark:bg-cont-100">
      <div className=" grid md:grid-cols-12 max-w-7xl mx-5 md:mx-auto py-10 ">
        <div className="col-span-6 order-2 md:p-10">
          <div className="">
            <h2 className="text-2xl md:text-3xl mb-2 font-bold">Gestiona tus datos personales </h2>
            <p className="text-base">
              Puedes acceder, revisar, actualizar y corregir tus datos
              personales.
            </p>
          </div>
          <div className="mt-6 max-w-lg relative text-left">
            <ul className="">
              <div>
                <li className="flex items-center gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold">Modifica tus datos</h3>
                </li>
                <p className="text-justify text-sm pl-9 mb-3">
                  Mantener actualizados tus datos personales nos permite
                  ofrecerte una experiencia personalizada, garantizar el uso
                  correcto de nuestras plataformas y el cumplimiento de las
                  regulaciones vigentes.
                </p>
              </div>
              <div>
                <li className="flex items-center gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold">Tus datos personales deben ser verídicos</h3>
                </li>
                <p className="text-justify text-sm pl-9 mb-3">
                  Debes garantizar que los datos personales que nos das son exactos y verídicos para evitar la suspensión en los servicios o la inhabilitación de tu cuenta.
                </p>
              </div>
              <div>
                <li className="flex items-center gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold">Integramos tus datos en nuestras plataformas</h3>
                </li>
                <p className="text-justify text-sm pl-9 mb-3">
                  Buscamos que vender, comprar o lo que quieras hacer, sea rápido y fácil en todo nuestro ecosistema.
                </p>
              </div>
            </ul>
          </div>
          <div className="flex gap-10 my-5 max-w-lg items-center">
            <Link href='/perfil'>
            <button type="button" className="p-3 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold text-sm md:text-lg">
              Gestionar tus datos
            </button>
            </Link>
            <Link href='/privacidad/resumen'>
            <button type="button" className="text-link-300 hover:text-link-400 dark:text-link-100  dark:hover:text-link-300 duration-150 transition-colors font-semibold flex items-center gap-2 text-sm md:text-lg ">
              Conocer más
              <FaAngleRight/>
            </button>
            </Link>
          </div>
        </div>
        <div className="col-span-6 px-10">
          <img src={PersonalData} alt="" className="rounded-lg w-96"/>
        </div>
      </div>
    </section>
  )
}
