import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
// import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { data } from './items';


export function NavMain() {
    const page = usePage();
    return (
        <>
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
            <SidebarMenu>
                {data.home.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.href === page.url}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Usuarios</SidebarGroupLabel>
            <SidebarMenu>
                {data.users.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.href === page.url}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Servicios</SidebarGroupLabel>
            <SidebarMenu>
                {data.venta.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.href === page.url}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Cataglogo</SidebarGroupLabel>
            <SidebarMenu>
                {data.catalog.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.href === page.url}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Venta</SidebarGroupLabel>
            <SidebarMenu>
                {data.services.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.href === page.url}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
        </>
    );
}
