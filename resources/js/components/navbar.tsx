import { Link, usePage } from "@inertiajs/react"
import { useState } from "react"
import Icono from '../assets/icono emprende.png'
import {SidebarMovil} from "./sidebar-movil"
import MenuPrincipal from "./menu-principal"
import MenuIcons from "./menu-icons"
import MenuAccount from "./menu-account"
import { SharedData } from "@/types"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const {auth} = usePage<SharedData>().props;

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="flex justify-between w-full items-center p-4 bg-slate-200 dark:bg-nav-900 fixed w-ful z-50">
      <div>
        {
          auth.user ? (
        <Link href="/home">
        <img src={Icono} alt="icono empresa" className="w-10"/>
        </Link>
          ) : (
        <Link href="/">
        <img src={Icono} alt="icono empresa" className="w-10"/>
        </Link>

          )
        }
      </div>
      <div className="md:hidden -order-1 md:order-none">
        <SidebarMovil onClick={toggleMenu} showMenu={showMenu} user={auth.user}/>
      </div>
    <div className="hidden md:flex">
      <MenuPrincipal />
    </div>
    <div>
    { auth.user ? (
            <MenuIcons user={auth.user} />
          ) : (
            <MenuAccount />
          )}
    </div>
    </header>
  )
}
