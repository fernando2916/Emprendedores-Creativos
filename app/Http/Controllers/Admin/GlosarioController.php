<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Glosario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GlosarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/glosario/index', [
            'data' => Glosario::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/glosario/CrearPalabra');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $palabra = $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
        ]);

        Glosario::create($palabra);

        return to_route('glosario')->with('message', 'Palabra creada correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Glosario $glosario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Glosario $glosario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Glosario $glosario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Glosario $glosario)
    {
        //
    }
}
