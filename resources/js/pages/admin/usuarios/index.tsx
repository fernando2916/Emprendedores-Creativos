import { VistaTabla } from "@/components/shared/VistaTabla";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, User } from "@/types";
import { Head, } from "@inertiajs/react";
import { FaPen } from "react-icons/fa";
import {UserTable} from "./components/UserTable";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Usuarios',
        href: '/usuarios',
    },
];
interface Props {
users: User[];
}
  

export default function index({users}: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Usuarios -"/>
    <VistaTabla title="Usuarios" nombre="Crear usuario" href="usuario/crear" icon={<FaPen/>} children={
      <>
      <UserTable data={users} />
      </>
    }/>
    </AppLayout>
  )
}

