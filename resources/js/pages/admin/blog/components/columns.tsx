import { Badge } from "@/components/ui/badge";
import { Post } from "@/types";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { FaAngleDown, FaAngleUp, FaPenSquare, FaTrash } from "react-icons/fa";
import { Link, router } from "@inertiajs/react";

import dayjs from "dayjs";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const SortedIcon = ({ isSorted }: {isSorted: false | SortDirection}) => {
  if(isSorted === 'asc') {
    return <FaAngleUp className="h4 w-4"/>;
  }
  if(isSorted === 'desc') {
    return <FaAngleDown className="h4 w-4"/>;
  }

  return null;
  
} 


export const columns: ColumnDef<Post>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return (
          <button
          className="flex items-center justify-center mx-auto"
            // variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <SortedIcon isSorted={column.getIsSorted()}/>
          </button>
        )
      },
    },
    {
      accessorKey: 'titulo',
      header: ({ column }) => {
        return (
          <button className="flex items-center justify-center mx-auto"
            // variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Titulo
            <SortedIcon isSorted={column.getIsSorted()}/>
          </button>
        )
      },
    },
    {
      accessorKey: 'imagen',
      header: 'Imagen'
    },
    {
      accessorKey: 'descripcion_corta',
      header: 'Descripcion corta'
    },
    {
      accessorKey: 'slug',
      header: 'Slug'
    },
    {
      accessorKey: 'contenido',
      header: 'Contenido'
    },
    {
      accessorKey: 'tiempo_de_lectura',
      header: 'Tiempo de lectura'
    },
    {
      accessorKey: 'estado',
      header: 'Estado',
      cell: ({ row }) => {
        const post = row.original;
  
        const variant = { 
          borrador: "borrador",
          publicado: "publicado",
  
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }[post.estado] ?? ("default" as any);
  
        return (
          <Badge variant={variant} >
            {post.estado}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'categoria.nombre',
      header: 'Categoria',
      cell: ({ row }) => row.original.categoria?.nombre || "Sin categoria",
    },
    {
      accessorKey: 'autor.name',
      header: 'Autor',
      cell: ({ row }) =>  {
        const autor = row.original.autor
        return autor ? `${autor.name} ${autor.last_name}` : "Sin autor"
      }
    },
     {
        header: "Creado",
        cell: ({ row }) => {
          const post = row.original;
          const Actualizacion = dayjs(post.updated_at).format("DD-MMM-YY");
          return <>{Actualizacion}</>;
        },
      },
    {
        header: "Acciones",
        accessorKey: "acciones",
        cell: ({ row }) => {
              const post = row.original;
        
              const handleDeletedUser = (postId: number) => {
                Swal.fire({
                  title: "¿Estás seguro?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Sí, eliminar",
                  cancelButtonText: "Cancelar",
                  background: "#120024",
                  color: "#ffffff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    // Usar Inertia para eliminar el usuario
                    router.delete(`/admin/blog/${postId}`, {
                      onSuccess: () => {
                        Swal.fire({
                          title: "Categoria Eliminada",
                          background: "#120024",
                          color: "#ffffff",
                          icon: "success",
                        });
                      },
                      onError: () => {
                        Swal.fire("Error", "Hubo un problema al eliminar la categoria", "error");
                      },
                    });
                  }
                });
              };
              return (
                <div className="flex justify-center items-center gap-3">
                  <Link href={`/admin/blog/editar/${post.id}`}>
                    <FaPenSquare className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                  </Link>
                  <button onClick={() => handleDeletedUser(row.original.id)}>
                    <FaTrash className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content cursor-pointer" />
                  </button>
                </div>
              );
            },
    },
]