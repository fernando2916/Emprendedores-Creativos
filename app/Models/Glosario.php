<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Glosario extends Model
{
    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
    ];
}
