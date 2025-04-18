import { VistaTabla } from "@/components/shared/VistaTabla";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { FaPen } from "react-icons/fa";
import { GlosarioTable } from "./components/GlosarioTable";
import { Glosario } from "@/types";
import { FC } from "react";

interface PageProps {
  data: Glosario[];
}

const Index: FC<PageProps> = ({data}) => {
  return (
   <AppLayout>
   <Head title='Glosario -'/>

   <VistaTabla title='Glosario' nombre='Nueva Palabra' href='glosario/crear' icon={<FaPen/>}
   children={
    <GlosarioTable data={data || []}/>
   }
   />

    </AppLayout>
  )
}

export default Index;
