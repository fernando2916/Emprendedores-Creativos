<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VerifyEmailController extends Controller
{
    public function show($verification_id): Response
    {
        return Inertia::render('auth/verify-email', [
            'id' => $verification_id,
        ]);
    }

    public function store(Request $request, $id): RedirectResponse
    {
        $request->validate([
            'verification_code' => 'digits:6|required'
        ]);

        $user = User::where('verification_id', $id)->first();
        if(!$user) {
            return back()->withErrors(['message' => 'Código de verificación inválido'], 400);
        }

        if($user->verification_code !== $request->verification_code) {
            return back()->withErrors(['message' => 'Código de verificación incorrecto'], 400);
        }

        if(now()->greaterThan($user->verification_code_expires_at)) {
            return back()->withErrors(['message' => 'El coódigo de verificación ha expirado'], 400);
        }

        $user->is_verified = 'verificado';
        $user->email_verified_at = now();
        $user->verification_code = null;
        $user->verification_code_expires_at = null;
        $user->save();

        // $token = JWTAuth::fromUser($user);

        return redirect()->route('login')->with('message', 'Correo Electrónico verificado exitosamente');

    }
}
