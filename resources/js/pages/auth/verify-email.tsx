import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import AuthLayout from "@/layouts/auth-layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

type ActivateForm = {
  verification_code: string;
  id: string

}


export default function VerifyEmail() {

  const { props } = usePage();
  const id  = props.id as string;
  // console.log(id)

  const { data, setData, post, reset, processing} = useForm<Required<ActivateForm>>({
    verification_code: '',
    id: id,
  })

  const handleComplete: FormEventHandler = () => {
    // e.preventDefault();
    post(route('verificar', { id: data.id }), {
      onFinish: () => reset('verification_code'),
    });
  }

  return (
     <AuthLayout title="Activar cuenta -" description="Ingesa el codigo de 6 digitos que te enviamos al correo que registraste">
      <Head title="Verificar cuenta"/>
      <div className="flex items-center mx-auto justify-center">
        <form>

        <InputOTP 
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        maxLength={6} 
        name="verification_code"
        value={data.verification_code} 
        onChange={(value) => setData('verification_code', value)}
        onComplete={handleComplete}
        >
        <InputOTPGroup>
        <InputOTPSlot index={0}/>
        <InputOTPSlot index={1}/>
        <InputOTPSlot index={2}/>
        <InputOTPSlot index={3}/>
        <InputOTPSlot index={4}/>
        <InputOTPSlot index={5}/>
        </InputOTPGroup>
        </InputOTP>
          </form>
      </div>
      <Link href='/'>
      <button
        disabled={processing}
        className="flex gap-2 font-semibold text-xl items-center mx-auto bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 disabled:bg-btn-600 dark:hover:bg-btn-600 text-white p-2 transition-colors rounded-md mt-10"
        type="submit"
        >
        Solicitar nuevo código
      </button>
        </Link>
     </AuthLayout>
  )
}
