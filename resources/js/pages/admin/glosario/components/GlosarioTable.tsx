import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Glosario } from '@/types';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { FC } from 'react';
import { columns } from './columns';

interface GlosarioTableProps {
    data: Glosario[];
}
export const GlosarioTable: FC<GlosarioTableProps> = ({ data }) => {
  
  const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

    });

    return (
        <div className="w-full p-5">
            <div className="flex items-center justify-between gap-3 py-4">
                <label htmlFor="filtro" className="sr-only">Palabra</label>
                <input
                    id="filtro"
                    type="text"
                    placeholder="Filtrar categoria..."
                    value={(table.getColumn('nombre')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('nombre')?.setFilterValue(event.target.value)}
                    className="border-link-100 max-w-sm rounded-md border-2 bg-transparent p-2 outline-hidden"
                />
            </div>
            <div className="rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return <TableHead key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
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
                                <TableCell colSpan={columns.length} className="bg-nav-800/85 rounded-md p-5 text-center">
                                    No hay resultados
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    Anterior
                </Button>
                <Button size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
};
