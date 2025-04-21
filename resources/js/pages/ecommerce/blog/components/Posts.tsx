import { formatFecha } from '@/hooks/use-fecha-formateada';
import { Post } from '@/types';
import { Link } from '@inertiajs/react';
import { FC } from 'react';

import { FaCalendar, FaEye, FaRegComment, FaRegThumbsUp, FaUserCircle } from 'react-icons/fa';

interface PostCardProps {
    data: Post[];
}

export const Posts: FC<PostCardProps> = ({ data }) => {
    const postsConFechaFormateada = data.map((post) => ({
        ...post,
        fechaFormateada: formatFecha(post.created_at),
    }));

    return (
        <section className="pb-16">
            <div className="mx-auto px-5 lg:container">
                <h1 className="mb-4 text-2xl font-semibold">Últimos Artículos</h1>

                <div className="grid gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-3">
                    {postsConFechaFormateada.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="mb-4 block overflow-hidden rounded-lg">
                            <article className="dark:bg-cont-100 bg-slate-400 text-white">
                                <div className="relative">
                                    <img
                                         src={`/storage/${post.imagen}`} alt={`/storage/${post.titulo}`}
                                        className=" aspect-video w-full object-cover "
                                        width={500}
                                        height={500}
                                    />
                                    {new Date().getTime() - new Date(post.created_at).getTime() <= 2 * 24 * 60 * 60 * 1000 && (
                                      <p className="bg-btn-200 dark:bg-btn-400 absolute -bottom-3 left-2  text-white rounded-md px-2 py-1 w-26 ml-2 text-sm font-bold">
                                        Post reciente
                                      </p>
                                    )}
                                </div>
                                <div className="space-y-3 p-4 mt-2">
                                    <div className="flex items-center justify-between">
                                        <span className="bg-categoria-100 rounded-md px-2 py-1 text-sm font-bold">{post.categoria?.nombre}</span>
                                        <div className="flex items-center justify-center gap-3 text-sm">
                                         
                                            <div className="flex items-center gap-1">
                                                <FaEye className="mt-0.5" />
                                                <p>Lectura de {post.tiempo_de_lectura} min.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="hover:text-link-400 dark:hover:text-link-200 mb-2 text-2xl font-semibold">{post.titulo}</h3>
                                    <div className="">
                                        <p className="line-clamp-3 text-justify text-sm text-slate-600 dark:text-slate-300">
                                            {post.descripcion_corta}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="flex items-center justify-center gap-1">
                                                <FaRegThumbsUp />
                                                <p>0</p>
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <FaRegComment />
                                                <p>3</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 text-sm">
                                            <div className="flex items-center gap-1">
                                                <FaUserCircle className="mt-0.5" />
                                                <p className="capitalize">{post.autor?.name}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaCalendar className="mt-0.5" />
                                                {post.fechaFormateada}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
