import { Card, CardContent } from '@/components/ui/card';
import LayoutPrincipal from '@/layouts/layout';
import { Glosario } from '@/types';
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface PageProps extends InertiaPageProps {
    glosario: Glosario[];
}

const Index = () => {
    const { glosario } = usePage<PageProps>().props;
    const [busqueda, setBusqueda] = useState('');

    const handleBuscar = () => {
      router.get('/glosario', {q: busqueda}, {
              preserveState: true,
              replace: true
            });
    }

    return (
        <LayoutPrincipal>
            <Head title="Glosario |" />
            <div className="">
                <div className="container mx-auto mt-10 flex flex-col justify-center space-y-2">
                    <h2 className="text-center text-3xl font-bold">Glosario Grafíco</h2>
                    <div className="">
                        <p className="text-center">Ahora es más fácil entender el significado de una palabra del mundo grafíco.</p>
                        <div className="pt-3">
                                <input
                                    type="text"
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                    onKeyDown={(e) => { 
                                      if(e.key === 'Enter') handleBuscar();
                                    }}
                                    placeholder="Buscar palabra..."
                                    className="border-link-100 focus:shadow-link-200 w-3/4 rounded-l-md border bg-transparent p-2 outline-none placeholder:text-gray-600 focus:shadow-md dark:placeholder:text-gray-400"
                                />
                                <button
                                    type="submit"
                                    onClick={handleBuscar}
                                    className="bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 dark:hover:bg-btn-600 w-1/4 cursor-pointer rounded-r-md p-2 text-lg font-semibold text-white transition-colors duration-150"
                                >
                                    Buscar
                                </button>
                        </div>
                    </div>
                </div>
                <div className="m-10 grid gap-3 md:grid-cols-3">
                    { glosario.length > 0 ? (
                      glosario.map((item) => (
                        <Card key={item.id}>
                            <CardContent>
                                <h2 className="text-2xl font-bold">{item.nombre}</h2>
                                <p className="pt-3 text-justify">{item.descripcion}</p>
                            </CardContent>
                        </Card>
                    ))
                  ) : (
                    <div className="col-span-full text-center text-slate-400 text-lg">
                      No se encontró ningún resultado para <strong>{busqueda}</strong>
                    </div>
                  )}
                </div>
            </div>
        </LayoutPrincipal>
    );
};

export default Index;
