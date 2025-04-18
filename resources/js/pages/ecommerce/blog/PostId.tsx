import { useFormattedData } from "@/hooks/useFormattedDate";
import LayoutPrincipal from "@/layouts/layout";
import { Post } from "@/types";
import { Head, usePage} from "@inertiajs/react";
import { FaClock, FaComment, FaEye, FaHeart, FaUser } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { HiMiniHandThumbUp } from "react-icons/hi2";


export default function PostId() {

  const {post} = usePage<{post: Post}>().props

  const formattedData = useFormattedData(post.created_at, 'es-ES')
  return (
    <LayoutPrincipal>
    <Head title={`${post.titulo} |`}/>
    <div className="p-10 space-y-5">
      <div>
      <img src={post.imagen} alt="" className="border bg-slate-400 p-5 w-full h-auto rounded-t-md" />
      </div>
        <p className="text-3xl font-bold mt-5">{post.titulo}</p>
      <div className="flex items-center justify-between mt-5">
        <p className="bg-categoria-100 text-white p-2 font-semibold rounded-md text-xl">{post.categoria?.nombre}</p>
        <div className="flex items-center gap-2 text-xl">
          <FaEye/>
          <p>
          Lectura de {post.tiempo_de_lectura} min.
          </p>
        </div>
      </div>
        
      <div className="bg-slate-400 dark:bg-cont-100 p-3 text-lg post-content rounded-md" dangerouslySetInnerHTML={{__html: post.contenido}}/>
      <div className="flex flex-col mx-auto  gap-2">
          <div className="flex items-center gap-2 text-xl">
            <div className="flex items-center gap-2">

            <FaUser/>
            {post.autor?.name} {post.autor?.last_name}
            </div>
          </div>
            <div>
              Publicado el {formattedData}
            </div>
        </div>
      <div className=" flex items-center gap-5 text-2xl mt-5">
        <div className="flex items-center gap-2">
        <FaHeart/>
        - 0                    
        </div>
        <div className="flex items-center gap-2">
        <FaComment/>
          - 0
        </div>
        <div className="flex items-center gap-2">
        <FaShare/>
          - 0
        </div>
      </div>
    <div className="">
      <div className="">
        <label htmlFor="comentario" className="sr-only">Comentario</label>
        <textarea name="comentario" id="comentario" className="disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400 mt-2" rows={5} placeholder="Agrega un comentario"/>
        <button className="bg-btn-200 dark:bg-btn-400 transition-colors duration-150 text-white rounded-md px-3 py-2 mt-2">Comentar</button>
      </div>
    </div>
    <div className="">
      <p className="text-2xl font-semibold">0 - Comentarios</p>
    <div className="">
      <div className="bg-slate-400 dark:bg-cont-100 text-white p-5 mt-2">
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
    </div>
    </div>
    </LayoutPrincipal>
  )
}
