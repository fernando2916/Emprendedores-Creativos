<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::get('crear-cuenta', [RegisteredUserController::class, 'create'])
    ->name('register');
    
    Route::post('crear-cuenta', [RegisteredUserController::class, 'store']);
    
    Route::get('ingresar', [AuthenticatedSessionController::class, 'create'])
    ->name('login');
    
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
    
    
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
    
    Route::get('restablecer-contraseña', [PasswordResetLinkController::class, 'create'])->name('forgot-passowrd');
    
});

Route::middleware('auth')->group(function () {
    Route::get('verificar/{id}', [VerifyEmailController::class, 'show'])
    ->name('verify-email');
    
    Route::post('verificar/{id}', [VerifyEmailController::class, 'store'])->name('verificar');
    
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');
});