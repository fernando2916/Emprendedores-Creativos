import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { type User } from '@/types';
import { Link } from '@inertiajs/react';
import {
    FaBell,
    FaFileAlt,
    FaHeart,
    FaLaptopCode,
    FaMoon,
    FaShoppingBasket,
    FaShoppingCart,
    FaSignInAlt,
    FaSun,
    FaUser,
    FaUserCircle,
    FaUserCog,
    FaUserShield,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

interface UseMenuContentProps {
    user: User;
}

export default function MenuIcons({ user }: UseMenuContentProps) {
    const { appearance, updateAppearance } = useAppearance();

    const icon: { value: Appearance; icon: IconType }[] = [
        { value: 'light', icon: FaSun },
        { value: 'dark', icon: FaMoon },
    ];

    const allowedRoles = ['Admin', 'Editor', 'Instructor'];
    const hasRoles = user?.roles?.some(role => allowedRoles.includes(role));

    return (
        <div>
            <ul className="flex items-center justify-center gap-1 sm:gap-2">
                {icon.map(({ value }) => (
                    <li key={value}>
                        <button
                            type="button"
                            onClick={() => updateAppearance(appearance === 'light' ? 'dark' : 'light')}
                            className="hover:text-link-100 dark:hover:text-link-100 relative flex cursor-pointer items-center justify-center text-slate-400 transition-colors outline-none dark:text-white"
                        >
                            {appearance === value ? <FaSun className="hidden text-xl dark:block" /> : <FaMoon className="text-xl dark:hidden" />}
                        </button>
                    </li>
                ))}
                {/* DESEOS */}
                <li>
                    <button
                        type="button"
                        className="hover:text-link-100 dark:hover:text-link-100 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors dark:text-white"
                    >
                        <Link href="/mi-cuenta/mis-deseos">
                            <FaHeart className="text-xl" />
                        </Link>
                    </button>
                </li>
                {/* CARRITO */}

                <li>
                    <Link className="" href="/carrito">
                        <button
                            type="button"
                            className="hover:text-link-100 dark:hover:text-link-100 flex items-center justify-center rounded-lg text-slate-400 transition-colors dark:text-white"
                        >
                            <FaShoppingCart className="hover:text-link-100 text-2xl" />
                        </button>
                    </Link>
                </li>
                {/* PERFIL */}
                <li>
                    <HoverCard>
                        <HoverCardTrigger className="hidden md:flex">
                            <FaUser className="hover:text-link-100 dark:hover:text-link-100 rounded-lg text-xl text-slate-400 dark:text-white" />
                            <HoverCardContent className="w-[15rem]">
                                {/* CONTENIDO */}
                                <div className="mb-3 overflow-y-scroll">
                                    <ul className="space-y-1">
                                        <li className="flex items-center gap-2 rounded-md p-2">
                                            <div className="">
                                                <FaUserCircle className="text-3xl" />
                                            </div>
                                            <div className="">
                                                <p className="text-sm">
                                                    {user?.name} {user?.last_name}
                                                </p>
                                                <span className="text-link-400 dark:textlink-100 text-xs font-semibold">{user?.email}</span>
                                            </div>
                                        </li>
                                        {hasRoles ? (
                                            <li>
                                                <Link href={route('dashboard')}>
                                                    <button
                                                        type="button"
                                                        className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400"
                                                    >
                                                        <FaUserShield />
                                                        Panel Administrativo
                                                    </button>
                                                </Link>
                                            </li>
                                        ) : (
                                            <></>
                                        )}

                                        <li>
                                            <Link href="/notificaciones">
                                                <button
                                                    type="button"
                                                    className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400"
                                                >
                                                    <FaBell />
                                                    Notificaciones
                                                </button>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/mi-cuenta/mi-perfil">
                                                <button
                                                    type="button"
                                                    className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400"
                                                >
                                                    <FaUserCircle />
                                                    Mi perfil
                                                </button>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/mi-cuenta/mis-compras">
                                                <button
                                                    type="button"
                                                    className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400"
                                                >
                                                    <FaShoppingBasket />
                                                    Mis compras
                                                </button>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/mi-cuenta/mis-cursos">
                                                <button
                                                    type="button"
                                                    className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400"
                                                >
                                                    <FaLaptopCode />
                                                    Mis aprendizaje
                                                </button>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/facturacion" className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400">
                                               
                                                    <FaFileAlt />
                                                    Facturación
                                            </Link>
                                        </li>

                                        <li className="dark:hover:bg-nav-700 flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400">
                                            <FaUserCog />
                                            Soporte
                                        </li>
                                        <li>
                                            <Link method="post" href={'/logout'} className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400">
                                               
                                                    <FaSignInAlt />
                                                    Salir
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </HoverCardContent>
                        </HoverCardTrigger>
                    </HoverCard>
                </li>
            </ul>
        </div>
    );
}
