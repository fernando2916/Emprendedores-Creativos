<?php

use App\Http\Controllers\Ecommerce\AmbienteController;
use App\Http\Controllers\Ecommerce\GlosarioController;
use App\Http\Controllers\Ecommerce\PostController;
use App\Http\Controllers\Ecommerce\PrivacidadController;
use App\Http\Controllers\Ecommerce\SocialController;
use App\Http\Controllers\Ecommerce\TerminosController;
use App\Http\Controllers\Ecommerce\VacantesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {return Inertia::render('welcome');})->name('welcome');

Route::get('nosotros/responsabilisad-social', [SocialController::class, 'index']);
Route::get('nosotros/politica-medioambiental', [AmbienteController::class, 'index']);
Route::get('terminos', [TerminosController::class, 'index']);
Route::get('privacidad', [PrivacidadController::class, 'index']);
Route::get('privacidad/resumen', [PrivacidadController::class, 'resumen']);
Route::get('vacantes', [VacantesController::class, 'index']);
Route::get('glosario', [GlosarioController::class, 'index']);
Route::get('blog', [PostController::class, 'index']);
Route::get('blog/{slug}', [PostController::class, 'show']);


    
Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('home', function () { 
            return Inertia::render('ecommerce/home');
        })->name('home');

        // Menu
});   

require __DIR__.'/auth.php';
