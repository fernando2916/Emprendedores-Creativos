import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';
import { FaEllipsisV, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-slate-800 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <HoverCard>
                <HoverCardTrigger>
                    <FaEllipsisV className="text-xl" />
                </HoverCardTrigger>
                <HoverCardContent className="w-[10rem]">
                    <ul>
                        <li>
                            <Link href='/'>
                            <button
                                type="button"
                                className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400"
                                >
                                <FaSignInAlt />
                                Ir al sitio
                            </button>
                                </Link>
                        </li>
                        <li>
                            <Link href={route('logout')}>
                            <button type="button"
                                className="dark:hover:bg-nav-700 flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-slate-400">
                                <FaSignOutAlt />
                                Salir
                            </button>
                            </Link>
                        </li>
                    </ul>
                </HoverCardContent>
            </HoverCard>
        </header>
    );
}
