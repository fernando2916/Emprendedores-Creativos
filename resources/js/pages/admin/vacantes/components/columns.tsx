import { Badge } from "@/components/ui/badge";
import { Vacante } from "@/types";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { FaAngleDown, FaAngleUp, FaPenSquare, FaTrash } from "react-icons/fa";
import { Link, router } from "@inertiajs/react";

import dayjs from "dayjs";
// import localizedFormat from 'dayjs/plugin/localizedFormat'

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


export const columns: ColumnDef<Vacante>[] = [

  
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
    accessorKey: 'puesto',
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
    header: ({ column }) => {
      return (
        <button
        className="flex items-center justify-center mx-auto"
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modalidad
          <SortedIcon isSorted={column.getIsSorted()}/>
        </button>
      )
    },
    accessorKey: "modalidad",
    cell: ({ row }) => {
      const vacante = row.original;

      const variant = { 
        Presencial: "presencial",
        Hibrido: "hibrido",
        Office: "office",

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }[vacante.modalidad] ?? ("default" as any);

      return (
        <Badge variant={variant} >
          {vacante.modalidad}
        </Badge>
      );
    },
  },
  {
    header: "Horario",
    accessorKey: "horario",
  },
  {
    header: "Salario",
    accessorKey: "salario",
  },
  {
    header: "Postulación",
    accessorKey: "postulacion",
  },
  {
    header: "Descripción",
    accessorKey: "descripcion",
  },
  {
    header: "Requisitos",
    accessorKey: "Requisitos",
  },
  {
    header: "Creado",
    cell: ({ row }) => {
      const vacante = row.original;
      const Actualizacion = dayjs(vacante.updated_at).format("DD-MMM-YY");
      return <>{Actualizacion}</>;
    },
  },
  {
    header: "Acciones",
    accessorKey: "acciones",
    cell: ({ row }) => {
          // const user = row.original;
    
          const handleDeletedUser = (vacanteId: number) => {
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
                router.delete(`/admin/vacante/${vacanteId}`, {
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