import { VistaTabla } from "@/components/shared/VistaTabla";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Categoria } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { FaPen } from "react-icons/fa";
import { CategoriaTable } from "./components/CategoriaTable";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { FC, useEffect } from "react";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categorias',
        href: '/categorias',
    },
];

  interface PageProps {
    categorias: Categoria[];
    // flash?: {
    //   message?: string;
    // };
    flash?: string;
    message: string;
  };

 const Index: FC<PageProps> = ({categorias}) => {

  const { flash } = usePage().props;
  const message = flash?.message;


    useEffect(() => {

      if(message) {
        Swal.fire({
          icon: 'success',
          title: message,
          background: "#120024",
          color: "#ffffff",
          });
      }

    }, [message])
    
    
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Categorias -"/>

      <VistaTabla title="Categorias" nombre="Crear Categoria" href="categoria/crear" icon={<FaPen/>}
      children={
       <CategoriaTable data={categorias}/>
      }
      />
    
    </AppLayout>
  )
}
export default Index;