import { Politicas } from '@/components/modales/politicas-modal';
import { Terminos } from '@/components/modales/terminos-modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { FaLock, FaLockOpen, FaSignInAlt } from 'react-icons/fa';

type RegisterForm = {
    name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, processing, errors, post, reset } = useForm<Required<RegisterForm>>({
        name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation   : '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });

    };

    return (
        <AuthLayout title="Crear cuenta -" description="Ingresa tus datos a continuación para crear tu cuenta">
            <Head title="Registro" />
            <form className="flex flex-col gap-6" onSubmit={submit} noValidate>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                            Nombre
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            className={
                                errors.name
                                    ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                                    : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                            }
                            required
                            name='name'
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                        />
                        <p className="text-sm font-semibold text-alerts-500">{errors.name}</p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                            Apellido
                        </Label>
                        <Input
                            id="last_name"
                            type="text"
                            className={
                                errors.last_name
                                    ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                                    : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                            }
                            required
                            name='last_name'
                            autoFocus
                            tabIndex={2}
                            autoComplete="last_name"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                        />
                        <p className="text-sm font-semibold text-red-400">{errors.last_name}</p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                            Correo Electrónico
                        </Label>
                        <Input
                            id="email"
                            type="text"
                            className={
                                errors.email
                                    ? 'border-alerts-500 focus:shadow-alerts-500 rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                                    : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                            }
                            required
                            name='email'
                            autoFocus
                            tabIndex={3}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                        />
                        <p className="text-sm font-semibold text-alerts-500">{errors.email}</p>
                    </div>
                    <div className="relative grid gap-2">
                        <Label htmlFor="password" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                            Contraseña
                        </Label>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            className={
                                errors.password
                                    ? 'border-alerts-500 focus:shadow-alerts-500 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                                    : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                            }
                            required
                            name='password'
                            tabIndex={4}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Ingresa tu contraseña"
                        />
                        <button type="button" className="absolute top-10 right-3 text-xl outline-none" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaLockOpen /> : <FaLock />}
                        </button>
                        <p className="text-alerts-500">{errors.password}</p>
                    </div>
                    <div className="relative grid gap-2">
                        <Label htmlFor="password_confirmation" className="text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                            Confirmar contraseña
                        </Label>
                        <Input
                            id="password_confirmation"
                            type={showPassword2 ? 'text' : 'password'}
                            className={
                                errors.password_confirmation
                                    ? 'border-alerts-500 focus:shadow-alerts-500 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                                    : 'disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400'
                            }
                            required
                            name='password'
                            tabIndex={4}
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="Repite tu contraseña"
                        />
                        <button type="button" className="absolute top-10 right-3 text-xl outline-none" onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? <FaLockOpen /> : <FaLock />}
                        </button>
                        <p className="text-alerts-500">{errors.password_confirmation}</p>
                    </div>
      
                    <div className="flex flex-col items-start justify-start">
                        <p className="w-full py-1 text-start text-[15px]">
                            Al crear tú cuenta, indicas que leíste y aceptas los
                            <Terminos />
                            <span>y el</span>
                            <Politicas />
                            <span className="font-bold">de Emprendedores Creativos.</span>
                        </p>
                    </div>
                    {processing ? (
                        <Button type="submit" className="bg-btn-400 hover:bg-btn-600 mt-4 w-full" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        </Button>
                    ) : (
                        <Button type="submit" className="bg-btn-400 hover:bg-btn-600 mt-4 w-full" tabIndex={6} disabled={processing}>
                            <FaSignInAlt />
                            Registarse
                        </Button>
                    )}
                </div>
                <div>
                    <p className="text-center">
                        ¿Ya tienes una cuenta?
                        <Link href={route('login')}>
                            <button
                                disabled={processing}
                                className="text-link-300 hover:text-link-600 dark:text-link-100 dark:hover:text-link-300 disabled:text-link-500 ml-2 cursor-pointer font-bold"
                            >
                                Ingresar
                            </button>
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
}
