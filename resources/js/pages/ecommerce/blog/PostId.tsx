import { formatFecha } from "@/hooks/use-fecha-formateada";
import LayoutPrincipal from "@/layouts/layout";
import { Post } from "@/types";
import { Head, Link, usePage} from "@inertiajs/react";
import { FaCalendar, FaClock, FaComment, FaEye, FaHeart, FaTag, FaUser } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { HiMiniHandThumbUp } from "react-icons/hi2";


export default function PostId() {

  const {post} = usePage<{post: Post}>().props

  const fechaFormateada = formatFecha(post.created_at)
  return (
    <LayoutPrincipal>
    <Head title={`${post.titulo} |`}/>
    <section className="py-8">
      <div className="px-6 grid grid-cols-10 gap-8 items-center mx-auto w-full max-w-[1200px]">
        <div className="col-span-full lg:col-span-5 order-2 lg:order-1">
          <h1 className="text-[2rem] leading-9 mb-4">{post.titulo}</h1>
          <p className="mb-5 text-justify">{post.descripcion_corta}</p>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-1">
              <FaTag className="text-btn-200 dark:text-btn-400"/> {post.categoria?.nombre} 
            </div>
            <div className="flex items-center gap-1">
              <FaEye className="text-btn-200 dark:text-btn-400"/> {post.tiempo_de_lectura} min.
            </div>
            <div className="flex items-center gap-1">
             <FaCalendar className="text-btn-200 dark:text-btn-400"/> {fechaFormateada}
            </div>
          </div>
          <div className="">
            Acciones
          </div>
        </div>
        <div className="col-span-full lg:col-span-5 order-1 lg:order-2 rounded-lg overflow-hidden">
        <img src={`/storage/${post.imagen}`} alt={`/storage/${post.titulo}`} className="object-cover aspect-video w-full  rounded-t-md" />
        </div>
      </div>
    </section>
    <section className="py-8">
      <div  className="px-6 grid grid-cols-10 gap-8 mx-auto w-full max-w-[1200px]">
        <div className="col-span-full lg:col-span-7">
          <article className="col-span-full lg:col-span-7 p-4 lg:p-8 bg-slate-400 dark:bg-cont-100  rounded-lg ">
          <div className="bg-slate-400 dark:bg-cont-100 p-3 text-lg post-content rounded-md" dangerouslySetInnerHTML={{__html: post.contenido}}/>
          </article>
        </div>
        <aside className="col-span-full lg:col-span-3 flex flex-col gap-8">
          <article className="bg-slate-400 dark:bg-cont-100 relative p-6 rounded-lg shadow-md overflow-hidden before:w-1 before:h-full before:bg-btn-400 before:absolute before:left-0 before:top-0 ">
            <h3 className="text-xl leading-6 mb-4">Autor del Artículo</h3>
            <span className=""></span>
            <div>
              <p className="flex items-center gap-2 font-semibold">{post.autor?.name} {post.autor?.last_name} </p>
              <p className=" flex items-center gap-2">
                <small>@Username</small>
                <Link href="/#" className="text-sm text-link-100">Ver perfil</Link>
              </p>
            </div>
          </article>
          <article className="bg-slate-400 dark:bg-cont-100 relative p-6 rounded-lg shadow-md overflow-hidden before:h-1 before:w-full before:bg-nav-400 before:absolute before:left-0 before:top-0 ">
            
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-2xl">
                <FaHeart className=""/>
                <span className=""> 0</span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <FaComment className=""/>
                <span className=""> 0</span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <FaShare className=""/>
                <span className=""> 0</span>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
    <section className="pb-12" aria-labelledby="commets-title">
    <div className="mx-auto w-full max-w-[1200px] px-1 grid grid-cols-10 gap-8">
      <div className="col-span-full lg:col-span-7 px-6">
        <div>
            <div className="">
              <label htmlFor="comentario" className="sr-only">Comentario</label>
              <textarea name="comentario" id="comentario" className="disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400 mt-2" rows={5} placeholder="Agrega un comentario"/>
              <button className="bg-btn-200 dark:bg-btn-400 transition-colors duration-150 text-white rounded-md px-3 py-2 mt-2">Comentar</button>
            </div>
        </div>
        <div>

        <h3 className="mb-4">Comentarios de los usuarios</h3>
        <p className="font-semibold text-lg">
          Recuerda
          <Link href={route('login')} className="text-link-100">iniciar sesión</Link>
          para comentar este artiículo
        </p>
        </div>

      </div>
      <div className="lg:col-span-7 px-6">
      <div className="">
      <p className="text-2xl font-semibold">Comentarios</p>
    <div className="">
      <div className="bg-slate-400 dark:bg-cont-100 rounded-md text-white p-5 mt-2">
        Comentario
      <div className="flex items-center gap-3 text-lg">
        <div className="flex items-center gap-2 mt-5">
          <HiMiniHandThumbUp/>
           0
        </div>
        <div className="flex items-center gap-2 mt-5">
          <FaUser/>
          Admin
        </div>
        <div className="flex items-center gap-2 mt-5">
          <FaClock/>
          Hoy
        </div>
      </div>
      </div>
    </div>
    </div></div>      
    </div>
    </section>
    
    </LayoutPrincipal>
  )
}
