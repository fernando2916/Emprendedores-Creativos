import { FaCheck } from "react-icons/fa"
import Hero from '@/assets/Hero.png'

export const SetYourPreferences = () => {
  return (
    <section className="">
    <div className=" grid md:grid-cols-12 max-w-7xl mx-5 md:mx-auto py-5 ">
      <div className="col-span-6  md:p-10">
        <div className="">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold">Configura tus preferencias</h2>
          <p className="text-base text-justify">
            Puedes controlar tu experiencia mediante la configuración de los
            permisos de privacidad. Habilitar estas opciones nos permite
            mostrarte contenido relevante según tus intereses.
          </p>
        </div>
        <div className="col-span-6 order-1 px-10 my-5 md:hidden">
        <img src={Hero} alt="" className="rounded-lg" />
        </div>
        <div className="mt-6 max-w-lg relative text-left">
          <ul className="">
            <div>
              <li className="flex items-center gap-5">
                <div>
                  <FaCheck />
                </div>
                <h3 className="text-base md:text-xl font-semibold">
                  Personalizan tu experiencia
                </h3>
              </li>
              <p className="text-justify text-sm pl-9 mb-3">
                Te damos recomendaciones útiles de otros productos de acuerdo
                a la información de tus últimas compras, búsquedas y
                favoritos.
              </p>
            </div>
            <div>
              <li className="flex items-center gap-5">
                <div>
                  <FaCheck />
                </div>
                <h3 className="text-base md:text-xl font-semibold">
                  Nos ayudan a mejorar nuestros servicios
                </h3>
              </li>
              <p className="text-justify text-sm pl-9 mb-3">
                Cierta información sobre tu actividad cuando navegas nuestros
                sitios, nos permite analizar tus preferencias para mejorar
                nuestros servicios o crear nuevas soluciones
              </p>
            </div>
          </ul>
        </div>
        <div className="my-5">
          <button
            type="button"
            className="p-3 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold text-sm md:text-lg w-full md:w-auto"
          >
            Configurar preferencias
          </button>
        </div>
      </div>
      <div className="col-span-6 order-1 px-10 hidden md:flex">
        <img src={Hero} alt="" className="rounded-lg" />
      </div>
    </div>
  </section>
  )
}
