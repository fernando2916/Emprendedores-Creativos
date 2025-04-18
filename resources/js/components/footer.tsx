import { FaEnvelope } from "react-icons/fa";
import { compania, legal, menu, social, soporte } from "./items";
import { Link } from "@inertiajs/react";

export default function Footer() {

  const today = new Date();
  const reserv = today.getFullYear();
  return (
    <footer className="bg-slate-200 dark:bg-nav-900">
       <h2 className="sr-only">Footer</h2>
       <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-bold text-link-100 tracking-wider uppercase">
                Menu
              </h3>
              <ul className="mt-4 space-y-4" role="list">
                {menu.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-link-300 dark:text-white dark:hover:text-link-100 text-slate-600 font-semibold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-bold text-link-100 tracking-wider uppercase">
                Soporte
              </h3>
              <ul className="mt-4 space-y-4" role="list">
                {soporte.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-link-300 dark:text-white dark:hover:text-link-100 text-slate-600 font-semibold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-bold text-link-100 tracking-wider uppercase">
                Empresa
              </h3>
              <ul className="mt-4 space-y-4" role="list">
                {compania.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-link-300 dark:text-white dark:hover:text-link-100 text-slate-600 font-semibold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-bold text-link-100 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4" role="list">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-link-300 dark:text-white dark:hover:text-link-100 text-slate-600 font-semibold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <h3 className="text-sm font-bold text-link-100 tracking-wider uppercase">
            Suscríbete a Nuestro Boletín
          </h3>
          <p className="mt-4 text-sm dark:text-gray-300">
            Nos importa mucho tu privacidad, por lo tanto solo enviamos 5
            correos por mes.
          </p>
          <form className="mt-4">
            <label
              htmlFor="correo"
              // name="correo electronico"
              className="text-link-100 font-semibold text-md"
            >
              Correo Electrónico
            </label>
            <div className="md:flex gap-2">
              <input
                id="correo"
                required
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className="bg-transparent border-2 placeholder:text-black placeholder:font-semibold dark:placeholder:font-semibold dark:placeholder:text-gray-400 border-link-100 p-2 focus:shadow-md focus:shadow-link-200 rounded-md mt-3 md:mt-2 outline-none w-full md:w-[70%]"
              />
              <button className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-all flex gap-1 items-center p-2 rounded-md mt-3 md:mt-2 text-md font-medium justify-center w-full md:w-[30%]">
                <FaEnvelope />
                Suscríbete
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          {social.map((item) => (
            <li
                className="text-link-100 hover:text-link-300 text-2xl flex"
                key={item.name}
              >
            <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-link-100 hover:text-link-300 text-2xl flex">
                <span className="sr-only">{item.name}</span>
                <item.icon  />
            </Link>
              </li>
          ))}
        </div>
        <p className="mt-8 text-base md:mt-0 md:order-1">
          <Link href="/" className="text-md text-link-100 font-semibold">
            Emprendedores Creativos &copy; {""}
          </Link>
          <span className="text-md font-semibold">{reserv} </span>
          Todos los derechos reservados.
        </p>
      </div>
    </div>
    </footer>
  )
}

