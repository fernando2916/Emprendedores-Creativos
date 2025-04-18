import { VistaTabla } from "@/components/shared/VistaTabla";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Vacante } from "@/types";
import { Head } from "@inertiajs/react";
import { FaPen } from "react-icons/fa";
import {VacanteTable} from "./components/VacanteTable";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Vacantes',
        href: '/vacante',
    },
];

interface VacanteProps {
  vacantes: Vacante[];
}

export default function Index({vacantes}: VacanteProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Vacantes -"/>
      <VistaTabla 
        title="Vacantes" 
        nombre="Crear Vacante" 
        href="vacante/crear" 
        icon={<FaPen/>}
        children={
          <VacanteTable data={vacantes}/>
        } 
       />
    </AppLayout>
  )
}
