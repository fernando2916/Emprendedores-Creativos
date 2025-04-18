<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $messages = [
            'email.required' => 'El correo es obligatorio',
            'email.email' => 'El correo no es válido',
            'password.required' => 'La contraseña es obligatoria.'
        ];
    
        $credentials = $request->only(['email', 'password']);

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|',
        ], $messages);

        if ($validator->fails()) {
            return back()->with($validator->errors(), 400);
        }

        // Intento de Inicio de Sesión
        if (! Auth::attempt($credentials)) {
            return back()->with(['message' => 'Correo o Contraseña incorrecta'], 422);
        }
         
        // Verificación de Email
        $user = auth('web')->user();
        if (!$user->is_verified) {
            return back()->with(['message' => 'El correo electrónico no ha sido verificado'], 401);
        }

        $request->session()->regenerate();


        return to_route('home')->with('message', 'Inicio de sesión exitoso');

    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
