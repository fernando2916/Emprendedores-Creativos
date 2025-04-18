import { Indicador } from '@/components/shared/Indicador';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

type VacanteForm = {
    puesto: string;
    modalidad: string;
    horario: string;
    salario: string;
    postulacion: string;
    descripcion: string;
    requisitos: string;
};

export default function CrearVacante() {
    const { data, setData, post, errors, processing } = useForm<Required<VacanteForm>>({
        puesto: '',
        modalidad: '',
        horario: '',
        salario: '',
        postulacion: '',
        descripcion: '',
        requisitos: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('crear.vacante'));
    };

    return (
        <AppLayout>
            <Head title="Crear Vacante -" />
            <div className="p-5">
                <Indicador Nombre="Vacante" href={route('vacante')} Pantalla="Crear Vacante" path="/admin/vacante/crear" />
                <div className="felx mt-8">
                    <h2 className="text-3xl font-black">Nueva Vacante</h2>
                </div>

                <div className="mt-10 flex flex-col">
                    <Card className="rounded-md">
                        <CardContent className="p-10">
                            <form className="space-y-4" noValidate onSubmit={submit}>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="puesto" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Puesto
                                    </label>
                                    <input
                                        type="text"
                                        id="puesto"
                                        name="puesto"
                                        placeholder="Nombre del puesto"
                                        className={
                                            errors.puesto
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={1}
                                        value={data.puesto}
                                        onChange={(e) => setData('puesto', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.puesto}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="modalidad" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Modalidad
                                    </label>
                                    <input
                                        type="text"
                                        id="modalidad"
                                        name="modalidad"
                                        placeholder="Presencial, Híbrido, Home Office"
                                        className={
                                            errors.modalidad
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={2}
                                        value={data.modalidad}
                                        onChange={(e) => setData('modalidad', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.modalidad}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="horario" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Horario
                                    </label>
                                    <input
                                        type="text"
                                        id="horario"
                                        name="horario"
                                        placeholder="Horario laboral"
                                        className={
                                            errors.horario
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={3}
                                        value={data.horario}
                                        onChange={(e) => setData('horario', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.horario}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="salario" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Salario
                                    </label>
                                    <input
                                        type="text"
                                        id="salario"
                                        name="salario"
                                        placeholder="Salario"
                                        className={
                                            errors.salario
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={4}
                                        value={data.salario}
                                        onChange={(e) => setData('salario', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.salario}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="postulacion" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Postulación
                                    </label>
                                    <input
                                        type="text"
                                        id="postulacion"
                                        name="postulacion"
                                        placeholder="Último día para postularse"
                                        className={
                                            errors.postulacion
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={5}
                                        value={data.postulacion}
                                        onChange={(e) => setData('postulacion', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.postulacion}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="descripcion" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Descripción
                                    </label>
                                    <input
                                        type="text"
                                        id="descripcion"
                                        name="descripcion"
                                        placeholder="Descripción del puesto"
                                        className={
                                            errors.descripcion
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={6}
                                        value={data.descripcion}
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.descripcion}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="requisitos" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                                        Requisitos
                                    </label>
                                    <input
                                        type="text"
                                        id="requisitos"
                                        name="requisitos"
                                        placeholder="Requisitos del puesto"
                                        className={
                                            errors.requisitos
                                                ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                                : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 rounded-md border-2 bg-transparent p-2 outline-hidden focus:shadow-md'
                                        }
                                        disabled={processing}
                                        required
                                        tabIndex={7}
                                        value={data.requisitos}
                                        onChange={(e) => setData('requisitos', e.target.value)}
                                    />
                                    <p className="text-sm font-semibold text-red-400">{errors.requisitos}</p>
                                </div>
                                {processing ? (
                                    <button
                                        type="submit"
                                        className="bg-btn-400 hover:bg-btn-600 flex w-full justify-center rounded-md p-2 font-semibold transition-colors duration-150"
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className="h-7 w-7 animate-spin justify-center font-bold" />}
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="bg-btn-400 hover:bg-btn-600 w-full cursor-pointer rounded-md p-2 font-semibold transition-colors duration-150"
                                        tabIndex={8}
                                        disabled={processing}
                                    >
                                        Crear Vacante
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

