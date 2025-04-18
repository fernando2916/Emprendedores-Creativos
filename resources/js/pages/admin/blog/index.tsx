import { VistaTabla } from "@/components/shared/VistaTabla";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { FaPen } from "react-icons/fa";
import { BlogTable } from "./components/BlogTable";

import { Post } from "@/types";
import { FC } from "react";

interface PageProps {
  posts: Post[];
}



const Index: FC<PageProps> = ({posts}) =>{
  return (
     <AppLayout>
     <Head title='Blog -'/>
    
     <VistaTabla title='Blog' nombre='Crear Post' href='/admin/blog/crear' icon={<FaPen/>}
     children={
    <>
      <BlogTable data={posts}/>
    </>
     }
     />
    
    </AppLayout>
  )
}
export default Index;