import { Head, useForm, Link } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { FaLockOpen, FaLock, FaUser } from 'react-icons/fa';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};


export default function Login() {
    const { data, setData, post, processing, errors } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // post(route('login'), {
        //     onFinish: () => reset('password'),
        // });
        post('login')
    };
const [showPassword, setShowPassword] = useState(false);
    return (
        <AuthLayout title="Iniciar Sesión " description="Ingresa tu correo y contraseña proporcionada a continuación para iniciar sesión">
            <Head title="Ingresar -" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
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
                            autoFocus
                            disabled={processing}
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                        />
                        <p className="text-sm font-semibold text-red-400">{errors.email}</p>
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
                            disabled={processing}
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Ingresa tu contraseña"
                        />
                        <button type="button" className="absolute top-10 right-3 text-xl outline-none" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaLockOpen /> : <FaLock />}
                        </button>
                        {errors.password}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Checkbox
                                id="remember"
                                className="w-4 h-4 accent-btn-200 dark:accent-btn-400"
                                name="remember"
                                checked={data.remember}
                                onClick={() => setData('remember', !data.remember)}
                                tabIndex={3}
                                disabled={processing}
                            />
                            <p id="remember">Recordarme</p>
                        </div>
                        <Link
                href={route('forgot-passowrd')}
                className="text-sm text-link-300 hover:text-link-600 dark:hover:text-link-300 dark:text-link-100"
              >
                ¿Olvidaste tu Contraseña?
              </Link>
                    </div>
                    {processing ? (
                        <Button type="submit" className="bg-btn-400 hover:bg-btn-600 mt-4 w-full" tabIndex={4} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        </Button>
                    ) : (
                        <Button type="submit" className="bg-btn-400 hover:bg-btn-600 mt-4 w-full" tabIndex={4} disabled={processing}>
                            <FaUser />
                            Ingresar
                        </Button>
                    )}
                </div>
                <div className=" border-t border-gray-500">
              <p className="text-center mt-5">
                ¿No tienes una cuenta?{" "}
                  <Link href={route('register')}>
                <button disabled={processing} type="button" className="text-link-300 hover:text-link-600 dark:hover:text-link-300 dark:text-link-100 disabled:text-link-500 font-bold cursor-pointer">
                  Crear cuenta
                </button>
                  </Link>
              </p>
            </div>
            </form>
        </AuthLayout>
    );
}
