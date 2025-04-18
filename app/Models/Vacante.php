<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vacante extends Model
{
    protected $fillable = [
        'id',
        'puesto',
        'modalidad',
        'horario',
        'salario',
        'postulacion',
        'identificador',
        'descripcion',
        'requisitos',
    ];
}
