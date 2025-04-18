<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use App\Models\Vacante;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VacantesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('ecommerce/vacantes/index', [
            'vacantes' => Vacante::all(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Vacante $vacante)
    {
        //
    }

}
