import { FaAngleRight } from "react-icons/fa"

export const ProtectedYourData = () => {
  return (
    <>
    <section className="py-5">
      <div className="max-w-7xl mx-5 md:mx-auto">
        <h2 className="text-center text-2xl md:text-xl font-semibold">Protegemos tus datos y te damos el control</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="px-5 py-14">
            <h3 className="text-center text-lg font-semibold">Preferencias de uso de tus datos</h3>
            <button type="button" className="flex items-center gap-2 justify-center mx-auto text-link-300 hover:text-link-500 dark:text-link-100 dark:hover:text-link-300 duration-150 transition-colors">
             Gestionar tu privacidad
              <FaAngleRight/>
              </button>
          </div>
          <div className="px-5 py-14">
            <h3 className="text-center text-lg font-semibold">Tus datos personales</h3>
            <button type="button" className="flex items-center gap-2 justify-center mx-auto text-link-300 hover:text-link-500 dark:text-link-100 dark:hover:text-link-300 duration-150 transition-colors">
              Administrar tus datos
              <FaAngleRight/>
              </button>
          </div>
          <div className="px-5 py-14">
            <h3 className="text-center text-lg font-semibold">Declaración de privacidad</h3>
            <button type="button" className="flex items-center gap-2 justify-center mx-auto text-link-300 hover:text-link-500 dark:text-link-100 dark:hover:text-link-300 duration-150 transition-colors">
             Conocer los detalles
              <FaAngleRight/>
              </button>
          </div>
          <div className="px-5 py-14">
            <h3 className="text-center text-base font-semibold">Centro de ayuda sobre privacidad</h3>
            <button type="button" className="flex items-center gap-2 justify-center mx-auto text-link-300 hover:text-link-500 dark:text-link-100 dark:hover:text-link-300 duration-150 transition-colors">
              Consultar la ayuda
              <FaAngleRight/>
              </button>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-slate-300 dark:bg-cont-100">
      <div className=" flex flex-col justify-center items-center mx-5 md:mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold my-2">Revisa documentos adicionales</h2>
        <div className="flex flex-col justify-center items-center md:mx-auto space-y-3 my-3 rounded-xl p-5 md:p-10 bg-slate-500 dark:bg-nav-800 md:w-[710px] lg:w-[1280px] shadow-lg shadow-cyan-950 ">
          <h2 className="font-semibold">Términos y condiciones</h2>
          <p className="text-sm">Consulta más detalles sobre el uso de nuestras plataformas.</p>
          <button type="button" className="flex items-center gap-2 text-link-200 hover:text-link-300 dark:text-link-100 dark:hover:text-link-300 duration-150 transition-colors">
            Consutar documento
            <FaAngleRight/>
          </button>
        </div>
      </div>
    </section>
  </>
  )
}
