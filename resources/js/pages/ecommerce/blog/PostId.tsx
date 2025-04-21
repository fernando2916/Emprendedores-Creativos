import { formatFecha } from "@/hooks/use-fecha-formateada";
import LayoutPrincipal from "@/layouts/layout";
import { Post, SharedData } from "@/types";
import { Head, Link, usePage} from "@inertiajs/react";
import { FaCalendar, FaClock, FaComment, FaEye, FaHeart, FaTag, FaUser } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { HiMiniHandThumbUp } from "react-icons/hi2";


export default function PostId() {
  const {post} = usePage<{post: Post}>().props
  const fechaFormateada = formatFecha(post.created_at)
  const {auth} = usePage<SharedData>().props

  return (
      <LayoutPrincipal>
          <Head title={`${post.titulo} |`} />
          <section className="py-8">
              <div className="mx-auto grid w-full max-w-[1200px] grid-cols-10 items-center gap-8 px-6">
                  <div className="order-2 col-span-full lg:order-1 lg:col-span-5">
                      <h1 className="mb-4 text-[2rem] leading-9">{post.titulo}</h1>
                      <p className="mb-5 text-justify">{post.descripcion_corta}</p>
                      <div className="mb-4 flex flex-col gap-2">
                          <div className="flex items-center gap-1">
                              <FaTag className="text-btn-200 dark:text-btn-400" /> {post.categoria?.nombre}
                          </div>
                          <div className="flex items-center gap-1">
                              <FaEye className="text-btn-200 dark:text-btn-400" /> {post.tiempo_de_lectura} min.
                          </div>
                          <div className="flex items-center gap-1">
                              <FaCalendar className="text-btn-200 dark:text-btn-400" /> {fechaFormateada}
                          </div>
                      </div>
                      <div className="">Acciones</div>
                  </div>
                  <div className="order-1 col-span-full overflow-hidden rounded-lg lg:order-2 lg:col-span-5">
                      <img
                          src={`/storage/${post.imagen}`}
                          alt={`/storage/${post.titulo}`}
                          className="aspect-video w-full rounded-t-md object-cover"
                      />
                  </div>
              </div>
          </section>
          <section className="py-8">
              <div className="mx-auto grid w-full max-w-[1200px] grid-cols-10 gap-8 px-6">
                  <div className="col-span-full lg:col-span-7">
                      <article className="dark:bg-cont-100 col-span-full rounded-lg bg-slate-400 p-4 lg:col-span-7 lg:p-8">
                          <div
                              className="dark:bg-cont-100 post-content rounded-md bg-slate-400 p-3 text-lg"
                              dangerouslySetInnerHTML={{ __html: post.contenido }}
                          />
                      </article>
                  </div>
                  <aside className="col-span-full flex flex-col gap-8 lg:col-span-3">
                      <article className="dark:bg-cont-100 before:bg-btn-400 relative overflow-hidden rounded-lg bg-slate-400 p-6 shadow-md before:absolute before:top-0 before:left-0 before:h-full before:w-1">
                          <h3 className="mb-4 text-xl leading-6">Autor del Artículo</h3>
                          <span className=""></span>
                          <div>
                              <p className="flex items-center gap-2 font-semibold">
                                  {post.autor?.name} {post.autor?.last_name}{' '}
                              </p>
                              <p className="flex items-center gap-2">
                                  <small>@Username</small>
                                  <Link href="/#" className="text-link-100 text-sm">
                                      Ver perfil
                                  </Link>
                              </p>
                          </div>
                      </article>
                      <article className="dark:bg-cont-100 before:bg-nav-400 relative overflow-hidden rounded-lg bg-slate-400 p-6 shadow-md before:absolute before:top-0 before:left-0 before:h-1 before:w-full">
                          <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 text-2xl">
                                  <FaHeart className="" />
                                  <span className=""> 0</span>
                              </div>
                              <div className="flex items-center gap-2 text-2xl">
                                  <FaComment className="" />
                                  <span className=""> 0</span>
                              </div>
                              <div className="flex items-center gap-2 text-2xl">
                                  <FaShare className="" />
                                  <span className=""> 0</span>
                              </div>
                          </div>
                      </article>
                  </aside>
              </div>
          </section>
          <section className="pb-12" aria-labelledby="commets-title">
              <div className="mx-auto grid w-full max-w-[1200px] grid-cols-10 gap-8 px-1">
                  <div className="px-6 lg:col-span-7">
                      <div className="">
                          <p className="text-2xl font-semibold">Comentarios</p>
                          <div className="">
                              <div className="dark:bg-cont-100 mt-2 rounded-md bg-slate-400 p-5 text-white">
                                  Comentario
                                  <div className="flex items-center gap-3 text-lg">
                                      <div className="mt-5 flex items-center gap-2">
                                          <HiMiniHandThumbUp />0
                                      </div>
                                      <div className="mt-5 flex items-center gap-2">
                                          <FaUser />
                                          Admin
                                      </div>
                                      <div className="mt-5 flex items-center gap-2">
                                          <FaClock />
                                          Hoy
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-full px-6 lg:col-span-7">
                      {auth.user ? (
                          <div>
                              <label htmlFor="comentario" className="sr-only">
                                  Comentario
                              </label>
                              <textarea
                                  name="comentario"
                                  id="comentario"
                                  className="disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 mt-2 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400"
                                  rows={5}
                                  placeholder="Agrega un comentario"
                              />
                              <button className="bg-btn-200 dark:bg-btn-400 mt-2 rounded-md px-3 py-2 text-white transition-colors duration-150">
                                  Comentar
                              </button>
                          </div>
                      ) : (
                          <div>
                              <h3 className="mb-4">Comentarios de los usuarios</h3>
                              <p className="text-lg font-semibold">
                                  Recuerda
                                  <Link href={route('login')} className="text-link-100">
                                      iniciar sesión
                                  </Link>
                                  para comentar este artiículo
                              </p>
                          </div>
                      )}
                  </div>
              </div>
          </section>
      </LayoutPrincipal>
  );
}
