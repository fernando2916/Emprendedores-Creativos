<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categorias;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/categorias/index', [
            'categorias' => Categorias::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/categorias/CrearCategoria');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $categoria = $request->validate([
            'nombre' => 'required',
            'tipo' => 'required',
        ]);

        Categorias::create($categoria);

        // session()->flash('swal', [
        //     'icon' => 'success',
        //     'title' => 'Bien hecho',
        //     'text' => 'Categoría creada exitosamente',
        // ]);

        return to_route('categoria')->with('message', 'Categoria creada correctamente');

        // return response()->json([
        //     'message' => 'Categoría creada exitosamente',
        //     'data' => $categoria
        // ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Categorias $categorias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categorias $categorias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categorias $categorias)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categorias $categorias)
    {
        $categorias->delete();
        return redirect()->route('categoria')->with('success', 'Categoria Eliminada correctamente');
    }
}
