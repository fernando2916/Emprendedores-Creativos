import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { Link } from '@inertiajs/react';
import { Button } from './ui/button';

import { FaMoon, FaShoppingCart, FaSun } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export default function MenuAccount() {
    const { appearance, updateAppearance } = useAppearance();

    const icon: { value: Appearance; icon: IconType }[] = [
        { value: 'light', icon: FaSun },
        { value: 'dark', icon: FaMoon },
    ];
    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2">
            {icon.map(({ value }) => (
                <button
                    key={value}
                    onClick={() => updateAppearance(appearance === 'light' ? 'dark' : 'light')}
                    className="hover:text-link-100 dark:hover:text-link-100 relative flex items-center justify-center text-slate-400 transition-colors outline-none dark:text-white"
                >
                    {
                      appearance === value 
                      ? <FaSun className="hidden text-2xl dark:block" /> 
                      : <FaMoon className="text-2xl dark:hidden" />
                    }
                </button>
            ))}
            <button>
                <Link href="/carrito">
                    <FaShoppingCart className="hover:text-link-100 text-slate-400 dark:text-white text-2xl" />
                </Link>
            </button>
            <div className="flex items-center gap-2">
                <Button variant="link" className="hidden bg-transparent lg:block">
                    <Link href={route('register')}>Registrarse</Link>
                </Button>
                <Button className="hidden md:block">
                    <Link href={route('login')}>Iniciar sesión</Link>
                </Button>
            </div>
        </div>
    );
}
