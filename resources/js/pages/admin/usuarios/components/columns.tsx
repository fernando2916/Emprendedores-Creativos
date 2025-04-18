import { Badge } from "@/components/ui/badge";
import { User } from "@/types";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { FaAngleDown, FaAngleUp, FaPenSquare, FaTrash } from "react-icons/fa";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { Link, router } from "@inertiajs/react";


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

export const columns: ColumnDef<User>[] = [
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
    accessorKey: 'name',
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
    accessorKey: 'last_name',
    header: ({ column }) => {
      return (
        <button className="flex items-center justify-center mx-auto"
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellido
          <SortedIcon isSorted={column.getIsSorted()}/>
        </button>
      )
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <button className="flex items-center justify-center mx-auto"
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Correo
          <SortedIcon isSorted={column.getIsSorted()}/>
        </button>
      )
    },
  },
  {
    header: "Identificador",
    accessorKey: "verification_id",
  },
  {
    header: "Verificado",
    accessorKey: "is_verified",
    cell: ({ row }) => {
      const user = row.original;

      const variant = { 
          pendiente: "pendiente",
          verificado: "verificado",

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }[user.is_verified] ?? ("default" as any);

      return (
        <Badge variant={variant} >
          {user.is_verified}
        </Badge>
      );
    },
  },
  {
    header: "Fecha verificado",
    accessorKey: "email_verified_at",
    cell: ({ row }) => {
          const user = row.original;
        dayjs.extend(localizedFormat)
          const Actualizacion = dayjs(user.email_verified_at).format("L ");
          return <>{Actualizacion}</>;
        },
  },
  {
    header: "Acciones",
    accessorKey: "acciones",
    cell: ({ row }) => {
          // const user = row.original;
    
          const handleDeletedUser = (userId: number) => {
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
                router.delete(`/admin/usuarios/${userId}`, {
                  onSuccess: () => {
                    Swal.fire({
                      title: "Usuario Eliminado",
                      background: "#120024",
                      color: "#ffffff",
                      icon: "success",
                    });
                  },
                  onError: () => {
                    Swal.fire("Error", "Hubo un problema al eliminar al usuario", "error");
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
 
];

