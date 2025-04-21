import AppLayout from "@/layouts/app-layout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Indicador } from '../../../components/shared/Indicador';
import { Card, CardContent } from "@/components/ui/card";
import FileInput from "@/components/FileInput";
import { LoaderCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Categoria, SharedData } from "@/types";
import { FC, FormEventHandler } from "react";;
import { useSlug } from '@/hooks/use-string-slug';
// import { RichTextEditor } from '@/components/shared/rich-text-editor';
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

interface PageProps {
  categorias: Categoria[],
}

type PostForm = {
  titulo: string
  imagen: File | null // Cambiado de string a File | null
  descripcion_corta: string
  slug: string
  contenido: string
  tiempo_de_lectura: string
  estado: string
  categorias_id: number | null
}

const CrearPost: FC<PageProps> = ({categorias}) => {
  const { generateSlug} = useSlug("", (slug) => setData("slug", slug))
  const {auth} = usePage<SharedData>().props;
  
  const { data, setData, errors, processing, post  } = useForm<Required<PostForm>>({
    titulo: '',
    imagen: null as File | null,
    descripcion_corta: '',
    slug: '',
    contenido: '',
    tiempo_de_lectura: '',
    estado: '',
    categorias_id: null as number | null,
  
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titulo = e.target.value
    setData("titulo", titulo)
    generateSlug(titulo)
  }
 const submit: FormEventHandler = (e) => {
     e.preventDefault();
 
     post(route('blog.store'), {
      forceFormData: true
     })
   }



  return (
     <AppLayout>
     <Head title='Blog -'/>
     <div className="p-5">

      <Indicador
        Nombre="Blog"
        href="/admin/blog"
        Pantalla="Crear Post"
        path="/admin/blog/crear" 
        />

        <div className="flex mt-8">
          <h2 className="text-3xl font-bold">Nuevo post</h2>
        </div>
        <div className="flex flex-col mt-10">
          <Card className="rounded-xl">
            <CardContent className="p-5">
            <form className="space-y-4" noValidate onSubmit={submit} encType="multipart/form-data">
              <div className="flex flex-col gap-2">
                <label htmlFor="titulo" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Titulo</label>
                <input 
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Titulo del post"
                  className={
                    errors.titulo
                      ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                      : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                  }
                  required
                  tabIndex={1}
                  onChange={handleTitleChange}
                  value={data.titulo}
                 />
              </div>

              <FileInput 
              fileName={data.imagen?.name}
              onChange={(file) => setData("imagen", file)} // Corrección del operador =>
              />
              {errors.imagen && <p className="text-sm text-red-500">{errors.imagen}</p>}

              <div className="flex flex-col gap-2">
                <label htmlFor="descripcion" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Descripción</label>
                <input 
                  type="text"
                  name="descripcion_corta"
                  id="descripcion"
                  placeholder="Descripcion del post"
                  className={
                    errors.descripcion_corta
                      ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                      : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                  }
                  required
                  tabIndex={2}
                  onChange={(e) => setData("descripcion_corta", e.target.value)}
                  value={data.descripcion_corta}
                 />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="slug" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Slug</label>
                <input 
                  name="slug"
                  id="slug"
                  placeholder="Slug del post"
                  className={
                    errors.slug
                      ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                      : 'disabled:bg-nav-900 disabled:border-link-500 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                  }
                  required
                  disabled
                  tabIndex={3}
                  readOnly
                  value={data.slug}
                 />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contenido" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Contenido</label>
              <SimpleEditor value={data.contenido} onChange={(value) => setData("contenido", value)}/>
              </div>             

              <div className="flex flex-col gap-2">
                <label htmlFor="tiempo" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Tiempo de lectura</label>
                <input 
                  type="string"
                  name="tiempo_de_lectura"
                  id="tiempo"
                  placeholder="Tiempo de lectura"
                  className={
                    errors.tiempo_de_lectura
                      ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                      : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                  }
                  required
                  tabIndex={5}
                  onChange={(e) => setData("tiempo_de_lectura", e.target.value)}
                  value={data.tiempo_de_lectura}
                 />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="estado" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Estado</label>
                <input 
                  type="text"
                  name="estado"
                  id="estado"
                  placeholder="Estado del post"
                  className={
                    errors.estado
                      ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                      : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                  }
                  required
                  tabIndex={6}
                  onChange={(e) => setData("estado", e.target.value)}
                  value={data.estado}
                 />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="categoria" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Categoria</label>
               <Select name="categorias_id" onValueChange={(value) => setData("categorias_id", parseInt(value))}>
                  <SelectTrigger>
                  <SelectValue placeholder="Seleciona una categoria"/>
                  </SelectTrigger>
                  <SelectContent>
                    {categorias?.length > 0 ? (
                      categorias.map((cat) => (
                        <SelectItem key={cat.id} tabIndex={7} id="categoria" value={cat.id.toString()}>
                          {cat.nombre}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="No hay categorias" disabled>No hay categorias</SelectItem>
                    )}
                  </SelectContent>
               </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="autor" className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Autor</label>
                <input 
                  name="users_id"
                  id="autor"
                  placeholder="Autor del post"
                  className="disabled:bg-nav-900 disabled:border-link-500 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400"
                  required
                  disabled
                  tabIndex={8}
                  readOnly
                  value={`${auth.user.name} ${auth.user.last_name}`}
                 />
              </div>
              {processing ? (
                   <button type="submit" className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-semibold flex justify-center" disabled={processing}>
                       {processing && <LoaderCircle className="h-7 w-7 font-bold animate-spin justify-center" />}
                   </button>
               ) : (
                   <button type="submit" className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-semibold" tabIndex={9} disabled={processing}>
                       Crear Post
                   </button>
               )}
            </form>
            </CardContent>
          </Card>
        </div>
    
        </div>
    </AppLayout>
  )
}

export default CrearPost;