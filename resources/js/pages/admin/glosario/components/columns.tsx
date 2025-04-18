import { Glosario } from "@/types"
import { Link, router } from "@inertiajs/react";
import { ColumnDef, SortDirection } from "@tanstack/react-table"
import { FaAngleDown, FaAngleUp, FaPenSquare, FaTrash } from "react-icons/fa";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import dayjs from "dayjs";

const SortedIcon = ({ isSorted }: {isSorted: false | SortDirection}) => {
  if(isSorted === 'asc') {
    return <FaAngleUp className="h4 w-4"/>;
  }
  if(isSorted === 'desc') {
    return <FaAngleDown className="h4 w-4"/>;
  }

  return null;
  
} 

export const columns: ColumnDef<Glosario>[] = [
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
    accessorKey: 'nombre',
    header: ({ column }) => {
      return (
        <button className="flex items-center justify-center mx-auto"
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <SortedIcon isSorted={column.getIsSorted()}/>
        </button>
      )
    },
  },
  {
    header: 'Descripción',
    accessorKey: 'descripcion',
  },
  {
      header: "Creado",
      cell: ({ row }) => {
        const glosarios = row.original;
        const Actualizacion = dayjs(glosarios.updated_at).format("DD-MMM-YY");
        return <>{Actualizacion}</>;
      },
    },
   {
      header: "Acciones",
      accessorKey: "acciones",
      cell: ({ row }) => {
            // const user = row.original;
      
            const handleDeletedUser = (glosarioId: number) => {
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
                  router.delete(`/admin/glosario/${glosarioId}`, {
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
                <Link href={'/#'}>
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
