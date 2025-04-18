import { FaAngleRight } from "react-icons/fa"
import StickerAdvertising from '@/assets/StickerAdvertising.svg'
import StickerUserExperience from '@/assets/StickerUserExperience.svg'
import StickerSecurity from '@/assets/StickerSecurity.svg'

export const CookiesContainer = () => {
  return (
    <section className="my-10 py-10 bg-slate-300 dark:bg-cont-100">
    {/* cabecera */}
    <div className="my flex flex-col items-center justify-center md:mx-auto max-w-7xl">
      <div className=" space-y-3 mx-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Cómo usamos las cookies
        </h2>
        <p className="text-justify text-sm md:text-lg">
          Las cookies nos permiten conocer cómo navegas nuestras páginas y
          mantener su funcionamiento. Con esta información, hacemos que sea
          más fácil, rápido y seguro usar tu cuenta. Si desactivas ciertas
          cookies, es posible que no puedas disfrutar de algunas
          funcionalidades de nuestros sitios.
        </p>
      </div>
      <div className="my-3">
        <p className="">Te contamos para qué sirven:</p>
      </div>
      {/* info */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 md:mx-5 ">
        <div className="shadow-lg shadow-cyan-950 bg-slate-500 dark:bg-nav-800 rounded-xl mx-7 md:mx-2 p-7">
          <span>
            <img src={StickerAdvertising} alt="" className="p-5 w-32 md:w-44 justify-center mx-auto" />
          </span>
          <div className=" text-center mx-auto">
            <h2 className="text-base font-bold mb-2">Publicidad personalizada</h2>
            <p className="text-sm text-center">
              Mejoramos nuestras ofertas y servicios y te mostramos anuncios
              que puedan interesarte.
            </p>
          </div>
        </div>
        <div className="shadow-lg shadow-cyan-950 bg-slate-500 dark:bg-nav-800 rounded-xl mx-7 md:mx-2 p-7">
          {" "}
          <span>
            <img src={StickerUserExperience} alt="" className="p-5 w-32 md:w-44 justify-center mx-auto" />
          </span>
          <div className=" text-center mx-auto">
            <h2 className="text-base font-bold mb-2">Faciliita tu experiencia</h2>
            <p className="text-sm text-center">
              Recordamos tus datos para un ingreso fácil y rápido desde tus
              dispositivos habituales.
            </p>
          </div>
        </div>
        <div className="shadow-lg shadow-cyan-950 bg-slate-500 dark:bg-nav-800 rounded-xl mx-7 md:mx-2 p-7">
          {" "}
          <span>
            <img src={StickerSecurity} alt="" className="p-5 w-32 md:w-44 justify-center mx-auto" />
          </span>
          <div className=" text-center mx-auto">
            <h2 className="text-base font-bold mb-2">Más seiguridad</h2>
            <p className="text-sm text-center">
              Refuerzan la seguridad de nuestro sitio y protegen a tu cuenta
              de posibles ataques maliciosos.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* botones */}
    <div className="flex items-center justify-center gap-10 mb-5 mt-10">
      <button
        type="button"
        className="p-3 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold text-sm md:text-lg"
      >
        Configurar cookies
      </button>
      <button
        type="button"
        className="text-link-300 hover:text-link-500 dark:text-link-100 dark:hover:text-link-300 duration-150 transition-colors font-semibold flex items-center gap-2 text-sm md:text-lg"
      >
        Conocer más
        <FaAngleRight />
      </button>
    </div>
  </section>
  )
}
