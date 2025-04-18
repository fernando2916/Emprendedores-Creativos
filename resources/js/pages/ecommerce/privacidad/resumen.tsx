import LayoutPrincipal from "@/layouts/layout";
import { Head, Link } from "@inertiajs/react";

import { FaAngleRight, FaCheck, FaHandshake, FaHome, FaSearch, FaStar, FaTag, FaShieldAlt } from "react-icons/fa"

import { FaBuildingColumns } from "react-icons/fa6";
import Hero from '@/assets/Hero.png'

export default function resumen() {
  return (
    <LayoutPrincipal>
      <Head title="Resumen de Privacidad -"/>
      <section className="relative w-full z-20">
        <div className="flex items-center justify-end max-w-7xl mx-5 md:mx-auto mt-5 gap-2">
          <FaHome />
          <Link href="/privacidad">
            <h3 className="text-link-100">Ir al Centro de privacidad</h3>
          </Link>
          <FaAngleRight />
        </div>
        <div className="grid md:grid-cols-12 mx-5 max-w-7xl md:mx-auto">
          <div className="col-span-6 md:p-10 mt-5 space-y-3">
            <div className="">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Resumen Declaración de Privacidad
              </h2>
              <p className=" text-justify text-sm md:text-lg lg:text-xl">
                La Declaración de Privacidad es el documento legal que
                disponibilizamos para que conozcas cómo protegemos tus datos y
                cómo te ofrecemos una experiencia personalizada.
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <img src={Hero} alt="" className="p-10" />
          </div>
        </div>
      </section>
      {/* DATOS PERSONALES */}
      <section className="bg-slate-300 dark:bg-cont-100 p-5 my-10">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-5 md:mx-auto">
          <div className="col-span-10 space-y-5 ">
            <h2 className="text-2xl md:text-4xl font-semibold">
              ¿De dónde obtenemos tus datos personales?
            </h2>
            <p className="text-sm md:text-base text-justify">
              En algunos casos, los datos personales los das tú mismo al
              registrarte o al usar alguno de nuestros servicios. En otros, los
              recolectamos automáticamente al navegar en nuestras páginas o a
              través de fuentes confiables.
            </p>
            <p className="text-sm md:text-base text-justify">
              Ten en cuenta que no es obligatorio que nos des tus datos
              personales, pero es un requisito para usar nuestros servicios. Si
              la información que das no es precisa, no podemos brindarte la
              mejor experiencia. Si das información inexacta o falsa, podemos
              llegar a suspender los servicios que te brindamos o inhabilitar tu
              cuenta.
            </p>
          </div>
        </div>
      </section>

      {/* TIPOS DE DATOS  */}
      <section className=" p-5 my-10">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-5 md:mx-auto space-y-5 ">
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 col-span-full">
            ¿Qué tipos de datos recolectamos?
          </h2>
          <div className="col-span-full md:col-span-6 ">
            <ul className="space-y-5">
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Nombre elegido para operar en las plataformas de
                    Emprendedores.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Número de documento o identificación válida.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Información y medios de pago.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Información transaccional y movimientos dentro de las
                    plataformas.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Información sobre tu actividad y preferencias.
                  </h3>
                </li>
              </div>
            </ul>
          </div>
          <div className="col-span-full md:col-span-6">
            <ul className="space-y-5">
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Nombre, imagen personal{" "}
                    {`"foto personal de la identificación"`}.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">Datos de contacto.</h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">Datos biométricos.</h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Información sobre tu ubicación.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Dirección IP que utilizas al conectarte a nuestros
                    servicios.
                  </h3>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      {/* QUE HACEMOS CON LOS DATOS   */}
      <section className= "bg-slate-300 dark:bg-cont-100 p-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-5 md:mx-auto place-items-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-5 col-span-full">
            ¿Qué hacemos con tus datos?
          </h2>
          <div className="col-span-11">
            <ul className="space-y-5">
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaHome className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Brindarte los productos, servicios y/o beneficios que
                    ofrecen las plataformas de Mercado Libre{" "}
                    {`(Marketplace, Mercado Pago,
                Mercado Crédito, Mercado Envíos, Mercado Libre Clasificados,
                Mercado Libre Publicidad, etc)`}
                    .
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaStar className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Mejorar nuestros servicios, y desarrollar nuevos para
                    ofrecerte una mejor experiencia.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaBuildingColumns className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Cumplir con obligaciones legales y requerimientos de
                    autoridades competentes.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaSearch className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Detectar y prevenir fraudes, para proteger la seguridad de
                    nuestros usuarios y la sustentabilidad de las plataformas.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaShieldAlt className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Proteger derechos de usuarios, de terceros o propios de
                    Mercado Libre.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaHandshake className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Colaborar con los titulares de propiedad intelectual en el
                    ejercicio de sus derechos.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaTag className="bg-btn-200 dark:bg-btn-600 text-white p-2 rounded-full text-[2.2rem]" />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Efectuar anuncios, contactos publicitarios y promocionales.
                  </h3>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      {/* POR CUANTO TIEMPO   */}
      <section className="p-5 grid md:grid-cols-12 mx-5 max-w-7xl md:mx-auto my-10">
        <div className="col-span-6 md:p-10 mt-5 space-y-3">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              ¿Por cuánto tiempo almacenamos tus datos personales?
            </h2>
            <p className=" text-justify text-sm md:text-lg lg:text-xl">
             Podemos guardar algunos de los datos que nos pediste borrar para cumplir con alguna finalidad en la Declaración de Privacidad o un deber legal. Después de cumplir estos requisitos, los borraremos.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
             ¿A quiénes compartimos tus datos?
            </h2>
            <p className=" text-justify text-sm md:text-lg lg:text-xl">
            No vendemos ni comercializamos tus datos personales. Tampoco compartimos o transferimos tus datos personales a terceros, salvo que sean proveedores que contratamos para que actúen en nuestro nombre, Aliados comerciales, empresas del Grupo Mercado Libre, otros usuarios o visitantes de la plataforma, entre otros.
            </p>
          </div>
        </div>
        <div className="col-span-6 place-content-center">
        <img src={Hero} alt="" className="p-10" />
        </div>
      </section>

      {/* FUNCIONES   */}
      <section className="p-5 my-10 bg-slate-300 dark:bg-cont-100">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-5 md:mx-auto space-y-5 ">
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 col-span-full">
            ¿Cómo funcionan los servicios de Mercado Libre para menores de edad?
          </h2>
          <p className="text-justify col-span-full">Lamentablemente los menores de edad, no tienen capacidad legal de contratar nuestro servicio, ya que de acuerdo a las leyes vigentes, no están autorizados para responder por transacciones comerciales.</p>
        </div>
      </section>
      {/* DERECHOS   */}
      <section className="p-5 my-10">

           <div className="grid md:grid-cols-12 mx-5 max-w-7xl md:mx-auto">
          <div className="col-span-6 md:p-10 mt-5 space-y-3 md:order-1">
            <div className="">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
               ¿Cuáles son tus derechos?
              </h2>
              <p className=" text-justify text-sm md:text-lg lg:text-xl">
                Tienes derecho a acceder, actualizar, corregir y tener confidencialidad sobre tus datos. Así como a restringir el envío de publicidad, ofertas y promociones, revisar alguna decisión automatizada y oponerte a que usemos tus datos para una o varias finalidades.
              </p>
          </div>
          <div className="pt-5 place-content-center">
            <ul className="space-y-5">
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Nombre elegido para operar en las plataformas de
                    Emprendedores.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Nombre elegido para operar en las plataformas de
                    Emprendedores.
                  </h3>
                </li>
              </div>
              <div>
                <li className="flex items-start gap-5">
                  <div>
                    <FaCheck />
                  </div>
                  <h3 className="text-base md:text-lg">
                    Nombre elegido para operar en las plataformas de
                    Emprendedores.
                  </h3>
                </li>
              </div>
            </ul>
          </div>
          </div>
          <div className="col-span-6 place-content-center">
          <img src={Hero} alt="" className="p-10" />
          </div>
        </div>
      </section>
      {/* COOKIES   */}
       <section className="p-5 my-10 bg-slate-300 dark:bg-cont-100">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-5 md:mx-auto space-y-5 ">
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 col-span-full">
            ¿Qué son las cookies?
          </h2>
          <p className="col-span-full">Son tecnologías que nos ayudan a conocer tus intereses.</p>
        </div>
      </section>
      {/* CAMBIOS EN LA DECLARACIOÓN   */}
       <section className="p-5 my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-5 md:mx-auto space-y-5 place-content-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 col-span-full">
            Cambios en la Declaración de Privacidad
          </h2>
          <p className="text-justify col-span-full">Eventualmente podremos realizar actualizaciones en la Declaración de Privacidad. Ten presente que cualquier cambio importante, te notificaremos por nuestros canales habituales y en el caso que lo requiera pediremos nuevamente tu autorización.</p>
        </div>
      </section>
    </LayoutPrincipal>
  )
}
