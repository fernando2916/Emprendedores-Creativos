<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrivacidadController extends Controller
{
    public function index()
    {
        return Inertia::render('ecommerce/privacidad/index');
    }
    public function resumen()
    {
        return Inertia::render('ecommerce/privacidad/resumen');
    }
}
