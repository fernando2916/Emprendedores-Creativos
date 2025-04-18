import LayoutPrincipal from "@/layouts/layout";
import { SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";


export default function Home() {
  const {auth} = usePage<SharedData>().props; 
  return (
    <LayoutPrincipal>
      <Head title="Inicio |"/>
      <div className="container mx-auto mt-4">
        <p className="text-4xl font-bold flex items-center">

        Hola de nuevo, 
        <span className="ml-2">

        {auth.user.name}
        </span>
        </p>
      </div>
      <h2>Home</h2>
    </LayoutPrincipal>
  )
}
