import { FaAngleRight, FaBell, FaCheck, FaCog, FaCopy, FaDownload, } from "react-icons/fa"
import Hero from '@/assets/Hero.png'

export const ProcessedData = () => {
  return (
    <section className="my-5">
    <div className=" grid md:grid-cols-12 max-w-7xl mx-5 md:mx-auto py-5 ">
      <div className="col-span-6  md:p-10">
        <div className="">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold">Cómo procesamos tus datos</h2>
          <p className="text-base text-justify mb-5">
            Procesar tus datos personales nos permite darte un excelente servicio en los productos y/o beneficios que ofrecemos. Resguardamos tus datos personales con adecuadas medidas de seguridad. No vendemos ni comercializamos información que pueda identificarte.
            
          </p>
          <p>Usamos tus datos para:</p>
        </div>
        <div className="col-span-6 order-1 px-10 my-5 md:hidden">
          <img src={Hero} alt="" className="rounded-lg p-10" />
        </div>
        <div className="mt-6 max-w-lg relative text-left">
          <ul className="">
            <div>
              <li className="flex items-center gap-5">
                <div>
                  <FaCheck />
                </div>
                <h3 className="text-base md:text-xl font-semibold">
                  Proteger tu seguridad
                </h3>
              </li>
              <p className="text-justify text-xs md:text-sm pl-9 mb-3">
                Prevenir fraude, abusos y delitos para un ecosistema seguro.
              </p>
            </div>
            <div>
              <li className="flex items-center gap-5">
                <div>
                  <FaCheck />
                </div>
                <h3 className="text-base md:text-xl font-semibold">
                  Garantizar el ejercicio de derechos
                </h3>
              </li>
              <p className="text-justify text-xs md:text-sm pl-9 mb-3">
               Habilitamos canales para que puedas ejercer tus derechos.
              </p>
            </div>
            <div>
              <li className="flex items-center gap-5">
                <div>
                  <FaCheck />
                </div>
                <h3 className="text-base md:text-xl font-semibold">
                  Sustentabilidad de nuestras plataformas
                </h3>
              </li>
              <p className="text-justify text-xs md:text-sm pl-9 mb-3">
               Cumplir con obligaciones legales y requerimientos de autoridades competentes.
              </p>
            </div>
          </ul>
        </div>
        <div className="my-5">
          <button
            type="button"
            className="p-3 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold text-sm md:text-lg w-full md:w-auto"
          >
            Conocer más
          </button>
        </div>
      </div>
      <div className="col-span-6 order-1 px-10 hidden md:flex">
        <img src='/Hero.png' alt="" className="rounded-lg" />
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 max-w-7xl md:mx-auto" >
        <div className="p-3 justify-center mx-auto">
          <span className="justify-center mx-auto flex text-link-300 m-5 text-3xl"><FaDownload/></span>
          <div className=" text-center justify-center mx-auto">
            <h2 className="text-xl font-semibold mb-2">¿Quién los procesa?</h2>
            <p className="text-sm mx-5 mb-3">Conoce la información detallada sobre los responsables del tratamiento de tus datos</p>
          </div>
          <button type="button" className="flex items-center justify-center mx-auto text-link-100 gap-2">
            Conocer más
            <FaAngleRight/>
          </button>
        </div>
        <div className="p-3 justify-center mx-auto">
          <span className="justify-center mx-auto flex text-link-300 m-5 text-3xl"><FaCog/></span>
          <div className=" text-center justify-center mx-auto">
            <h2 className="text-xl font-semibold mb-2">Nuestro sistema</h2>
            <p className="text-sm mx-5 mb-3">Usamos herramientas que nos ayudan a tomar decisiones automatizadas para ser más eficientes.</p>
          </div>
          <button type="button" className="flex items-center justify-center mx-auto text-link-100 gap-2">
            Saber más
            <FaAngleRight/>
          </button>
        </div>
        <div className="p-3 justify-center mx-auto">
          <span className="justify-center mx-auto flex text-link-300 m-5 text-3xl"><FaCopy/></span>
          <div className=" text-center justify-center mx-auto">
            <h2 className="text-xl font-semibold mb-2">Reporte de datos</h2>
            <p className="text-sm mx-5 mb-3">Puedes pedir un reporte con los datos personales que usamos y guardamos sobre tu cuenta.</p>
          </div>
          <button type="button" className="flex items-center justify-center mx-auto text-link-100 gap-2">
            Solicitar el reporte
            <FaAngleRight/>
          </button>
        </div>
        <div className="p-3 justify-center mx-auto">
          <span className="justify-center mx-auto flex text-link-300 m-5 text-3xl"><FaBell/></span>
          <div className=" text-center justify-center mx-auto">
            <h2 className="text-xl font-semibold mb-2">Novedades</h2>
            <p className="text-sm mx-5 mb-3">Conoce los canales habilitados para avisarte si hay cambios en el uso de tus datos personales.</p>
          </div>
          <button type="button" className="flex items-center justify-center mx-auto text-link-100 gap-2">
            Consultar canales
            <FaAngleRight/>
          </button>
        </div>
      </div>
  </section>
)
  
}
