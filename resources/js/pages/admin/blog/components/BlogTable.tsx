import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { Post } from '@/types';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import { FC, useState } from 'react';
import { FaAngleDown, FaFilter } from 'react-icons/fa';
import { columns } from './columns';

interface PostTableProps {
    data: Post[];
}

export const BlogTable: FC<PostTableProps> = ({ data }) => {
    const [columnVisibility, setColumnVisibility] = useState({});
    const [sorting, setSorting] = useState<SortingState>([]);

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
        },
    });
    return (
        <div className="md:w-[56.5rem] lg:w-auto p-5">
            <div className="flex items-center justify-between gap-3 py-4">
                <label htmlFor="filtro" className='sr-only'></label>
                <input
                    id='filtro'
                    type="text"
                    placeholder="Filtrar Post..."
                    value={(table.getColumn('titulo')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('titulo')?.setFilterValue(event.target.value)}
                    className="border-link-100 max-w-sm rounded-md border-2 bg-transparent p-2 outline-hidden"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="border-link-100 flex items-center justify-end gap-2 rounded-md border-2 p-2 outline-hidden">
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
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md">
                <Table className='min-w-[600px]'>
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
                                        <TableCell className="truncate max-w-[150px]" key={cell.id}>
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
