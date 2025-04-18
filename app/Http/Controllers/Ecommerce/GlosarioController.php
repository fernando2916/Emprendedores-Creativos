<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use App\Models\Glosario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GlosarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $busqueda = $request->query('q');

        $glosario =Glosario::when($busqueda, function ($query) use ($busqueda) {
            $query->where(DB::raw('LOWER(nombre)'), 'like', '%' . strtolower($busqueda) . '%');
        })->orderBy('nombre', 'asc')->get();

        return Inertia::render('ecommerce/glosario/index', [
            'glosario' => $glosario,
        ]);
    }

    
}
