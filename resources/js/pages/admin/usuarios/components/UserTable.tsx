import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, SortingState, getSortedRowModel, getPaginationRowModel} from '@tanstack/react-table'
import { columns } from "./columns";
import { FC, useState } from "react";
import { User } from "@/types";
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";

interface UsersTableProps{
  data: User[];
}

export const UserTable: FC<UsersTableProps> = ({ data }) => {

  const [columnVisibility, setColumnVisibility] = useState({})
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns, 
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnVisibility,
      sorting,
    }
  })
  return (
    <div className='w-auto p-5'>
      <div className="flex items-center justify-between gap-3 py-4">
        <input
          type="text"
          placeholder="Filtrar usuario..."
          value={table.getColumn("name")?.getFilterValue() as string ?? "" }
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm outline-hidden border-2 border-link-100 rounded-md p-2 bg-transparent"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 justify-end border-2 border-link-100 rounded-md p-2 outline-hidden">
              <FaFilter className="text-2xl md:text-lg" />
              <span className="">
                <FaAngleDown /> 
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md ">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center p-5 bg-nav-800/85 rounded-md">
                No hay resultados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button 
        size='sm' 
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button 
        size='sm' 
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}
