<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
class Post extends Model
{
    protected $fillable = [
        'titulo',
        'imagen',
        'descripcion_corta',
        'slug',
        'contenido',
        'tiempo_de_lectura',
        'estado',
        'categorias_id',
        'users_id'
    ];

    public function categoria() : BelongsTo {
        return $this->belongsTo(Categorias::class, 'categorias_id');
    }

    public function autor() : BelongsTo {
        return $this->belongsTo(User::class, 'users_id');
    }

    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }

    // public static function boot() {
    //     parent::boot();

    //     static::creating(function ($post) {
    //         $post->slug = Str::slug($post->titulo);
    //     });

    //     static::updating(function ($model) {
    //         $model->slug = Str::slug($model->titulo);
    //     });

    // }
    
}
