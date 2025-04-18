import { Indicador } from '@/components/shared/Indicador';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler} from 'react';

type CategoriaForm = {
  nombre: string;
  tipo: string;
}

export default function CrearCategoria() {
  const {data, setData, post, errors, processing} = useForm<Required<CategoriaForm>>({
    nombre: '',
    tipo: ''
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('crear.categoria'))
  }

    return (
        <AppLayout>
          <Head title='Crear Categoria -'/>
          
          <div className="p-5">
            <Indicador Nombre='Categoria' href={route('categoria')} Pantalla='Crear Categoria' path='/admin/categoria/crear'/>

            <div className="flex mt-8">
               <h2 className="text-3xl font-bold">Nueva Categoria</h2>
            </div>

            <div className="flex flex-col mt-10">
                <Card className="rounded-xl">
                    <CardContent className="p-10 ">
                    
                    <form className="space-y-4 " noValidate onSubmit={submit}>
                      <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor='nombre'>
                  Nombre
                </label>
                        <input type="text" name="nombre" id="nombre" placeholder='Nombre de la categoria' 
                        className={errors.nombre
                          ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-hidden focus:shadow-md focus:shadow-alerts-500"
                          : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-hidden focus:shadow-md focus:shadow-link-200"
                      } 
                        required 
                        tabIndex={1} 
                        value={data.nombre}
                        onChange={(e) => setData('nombre', e.target.value)} 
                        />
                         <p className="text-sm text-red-400 font-semibold">
                  {errors.nombre}
                </p>
                      </div>
                      <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor='tipo'>
                  Tipo
                </label>
                        <input type="text" name="tipo" id="tipo" placeholder="Post, Producto, Curso, Recurso" 
                        className={
                          errors.tipo
                            ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-hidden focus:shadow-md focus:shadow-alerts-500 w-full"
                            : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-hidden focus:shadow-md focus:shadow-link-200 w-full"
                        }
                        required 
                        tabIndex={2} 
                        value={data.tipo}
                        onChange={(e) => setData('tipo', e.target.value)} 
                        />
                        <p className="text-sm text-red-400 font-semibold">
                  {errors.tipo}
                </p>
                      </div>
                      {processing ? (
                        <button type="submit" className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-semibold flex justify-center" disabled={processing}>
                            {processing && <LoaderCircle className="h-7 w-7 font-bold animate-spin justify-center" />}
                        </button>
                    ) : (
                        <button type="submit" className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-semibold" tabIndex={6} disabled={processing}>
                            Crear Categoria
                        </button>
                    )}
                    </form>
                    </CardContent>
                </Card>
            </div>
          </div>
        </AppLayout>
    );
}
