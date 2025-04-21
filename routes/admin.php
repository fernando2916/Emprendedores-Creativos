<?php

use App\Http\Controllers\Admin\CategoriaController;
use App\Http\Controllers\Admin\GlosarioController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VacantesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('dashboard', function () { 
    return Inertia::render('admin/dashboard');
})->name('dashboard');
// User
Route::get('usuarios', [UserController::class, 'index'])->name('usuarios');
Route::delete('usuarios/{user}', [UserController::class, 'delete'])->name('usuarios.destroy');
// Categorias
Route::get('categoria', [CategoriaController::class, 'index'])->name('categoria');    
Route::get('categoria/crear', [CategoriaController::class, 'create'])->name('categoria.create');    
Route::post('categoria/crear', [CategoriaController::class, 'store'])->name('crear.categoria');    
Route::delete('categoria/{categorias}', [CategoriaController::class, 'destroy'])->name('categoria.destroy');  
// Vacantes
Route::get('vacante', [VacantesController::class, 'index'])->name('vacante');    
Route::get('vacante/crear', [VacantesController::class, 'create'])->name('vacante.create');    
Route::post('vacante/crear', [VacantesController::class, 'store'])->name('crear.vacante');

//Glosario
Route::get('glosario', [GlosarioController::class, 'index'])->name('glosario');
Route::get('glosario/crear', [GlosarioController::class, 'create'])->name('glosario.create');
Route::post('glosario/crear', [GlosarioController::class, 'store'])->name('crear');
// Blog
Route::get('blog', [PostController::class, 'index'])->name('blog');
Route::get('blog/crear', [PostController::class, 'create'])->name('blog.create');
Route::post('blog/crear', [PostController::class, 'store'])->name('blog.store');
Route::get('blog/editar/{post}', [PostController::class, 'edit'])->name('blog.edit');
Route::put('blog/editar/{post}', [PostController::class, 'update'])->name('blog.update');
Route::delete('blog/{post}', [PostController::class, 'destroy'])->name('blog.destroy');


