import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa"
import { PostRead } from "./PostRead"
import { Link } from "@inertiajs/react"

export const PostFeature = () => {
  return (
    <section className="pt-10">
       <div className="flex flex-col lg:items-start lg:grid lg:grid-cols-2 gap-8 py-16 lg:container mx-auto px-5">            
            <Link href='#'>
            <article className="rounded-lg overflow-hidden shadow-md bg-slate-300 dark:bg-cont-100">
                <div className="relative">
                    <img src='/Equipo.webp' width={584} height={330} className="aspect-video object-cover w-full"/>
                    <div className="flex items-center gap-2">
                        <p className="absolute px-1 text-base font-medium translate-y-1/2 left-4 bottom-0 bg-categoria-200 text-white dark:hover:bg-categoria-100 transition-colors rounded-md">Categoria</p>
                        <p className="absolute px-1 text-base font-medium translate-y-1/2 left-28 bottom-0 bg-categoria-200 text-white dark:hover:bg-categoria-100 transition-colors rounded-md">Post Destacado</p>
                    </div> 
                </div>
                <div className="p-4">
                    <h2 className="font-semibold mb-2 mt-2 text-base md:text-2xl">Titulo</h2>
                    <p className="text-sm md:text-base lg:text-xl text-justify text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci id nobis iure excepturi eligendi, neque dolorem labore similique debitis voluptatibus animi dicta commodi accusantium illum architecto rem iste eveniet magni.</p>
                </div>
                <footer className="flex text-white flex-wrap gap-2 justify-between py-2 px-4 text-base bg-slate-500 dark:bg-[#001d47] ">
                    <div className="flex items-center gap-2">
                            <FaUserCircle/>
                        <p>Autor</p>
                    </div>
                    <div className="flex items-center gap-2">
                            <FaClock/>
                        <p>Lectura de 8 min</p>
                    </div>
                    <div className="flex items-center gap-2">
                            <FaCalendar/>
                        <p>Hace 2 días</p>
                    </div>
                </footer>
            </article>
            </Link>
            <PostRead/>
        </div>
    </section>
  )
}
