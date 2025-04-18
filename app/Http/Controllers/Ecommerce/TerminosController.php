<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TerminosController extends Controller
{
    public function index()
    {
        return Inertia::render('ecommerce/terminos/index');
    }

}
