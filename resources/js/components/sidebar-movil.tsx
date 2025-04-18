import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { FC } from 'react';
import { FaAngleRight, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import {MenuDash} from './menu-dash';
import {MenuSidePrincipal} from './menu-sidebar-principal';
import { User } from '@/types';

type SidebarProps = {
    onClick: () => void;
    showMenu: boolean;
    user: User
};

export const SidebarMovil: FC<SidebarProps> = ({ onClick: toggleMenu, showMenu: showMenu, user }) => {

//   const status: string = 'not-Authenticated';

    return (
        <aside>
            <div>
                <button
                    type="button"
                    className="bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 dark:hover:bg-btn-600 rounded-md p-3 text-white transition-colors duration-150 outline-none"
                    onClick={toggleMenu}
                >
                    <FaBars />
                </button>
                <div
                    className={cn(
                        `dark:bg-nav-950/60 fixed inset-0 z-50 w-full items-end justify-start bg-gray-900/60 duration-150 ease-out ${showMenu ? 'left-0' : '-left-full'}`,
                    )}
                >
                    <button
                        type="button"
                        className="bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 dark:hover:bg-btn-600 absolute top-5 right-5 rounded-md p-3 text-white transition-colors duration-150 outline-none"
                        onClick={toggleMenu}
                    >
                        <FaTimes />
                    </button>
                    <div
                        className={cn(
                            `dark:bg-nav-900 fixed h-full w-3/4 justify-between overflow-y-scroll bg-slate-200 transition-all duration-150 ease-out ${showMenu ? 'left-0' : '-left-full'}`,
                        )}
                    >
                        <div className="dark:bg-nav-800 flex h-36 items-center justify-center gap-3 bg-white p-5 py-3">
                            {user ? (
                                <>
                                    <div className="">{/* <Image src={} width={50} height={50} alt="imagen de perfil"/> */}</div>
                                    <div>
                                        <span className="text-2xl">{user.name}</span>
                                        <span className="text-2xl">{user.last_name}</span>
                                        <div className="flex items-center gap-1">
                                            <Link href="/mi-cuenta/mi-perfil" className="flex items-center gap-1" onClick={toggleMenu}>
                                                <span className="text-link-400 text-base">Mi Perfil</span>
                                                <FaAngleRight className="text-link-500 text-lg font-medium" />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="p-5">
                                        <div className="flex items-center justify-center gap-3 pb-3">
                                            <div className="rounded-full">
                                                <FaUser className="text-3xl" />
                                            </div>
                                            <div className="">
                                                <span className="text-lg font-semibold">Entra a tu cuenta</span>
                                                <p className="text-justify text-xs text-slate-500">
                                                    Podrás comprar un artículo, comentar una publicación o continuar con tu aprendizaje.
                                                </p>
                                            </div>
                                        </div>
                                        <Link href={route('login')} onClick={toggleMenu}>
                                            <button
                                                type="button"
                                                className="bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 dark:hover:bg-btn-600 mx-auto flex w-full items-center justify-center rounded-lg p-2 text-white transition-colors duration-150"
                                            >
                                                Ingresar
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                        { user ? (
            <MenuDash onClick={toggleMenu} user={user}  />
          ) : (
            <MenuSidePrincipal onClick={toggleMenu} />
          )}
                    </div>
                </div>
            </div>
        </aside>
    );
};
