<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Mail\VerificationMail;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */

    public function store(RegisterRequest $request): RedirectResponse
    {
        {
            $expiration = now()->addMinutes(15);
            $data = $request->validated();
    
            $user = User::create([
                'name' => $data['name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'verification_code' => random_int('100000', '999999'),
                'verification_code_expires_at' => $expiration,
                'verification_id' => Str::uuid(),
            ]);
    
            Mail::to($user->email)->send(new VerificationMail($user));

            return redirect()->route('verify-email', ['id' => $user->verification_id])
    ->with('message', 'Usuario registrado correctamente. Por favor, revisa tu correo y sigue las instrucciones.');
        }
    }
}
