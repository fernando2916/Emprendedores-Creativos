<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Categorias;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::with(['categoria', 'autor'])->get();

        return Inertia::render('admin/blog/index', [
            'posts' => $post,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/blog/CrearPost', [
            'categorias' => Categorias::all(),
        ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    { 

        $data = $request->validate([
           'titulo' => 'required|string|max:255',
           'imagen' => 'nullable|image|mimes:jpeg,png|max:2048',
           'descripcion_corta' => 'required|string',
           'slug' => 'required|string|max:255|unique:posts,slug',
           'contenido' => 'required|string',
           'tiempo_de_lectura' => 'required|integer',
           'estado' => 'required',
           'categorias_id' => 'required|exists:categorias,id',
       ]);
       
       $data['users_id'] = auth('web')->id();

       if ($request->hasFile('imagen')) {
        
       $data['imagen'] = Storage::put('posts', $request->imagen);
       }
       // $path = $request->file('imagen')->store('posts', 'public');

       Post::create($data);

       return to_route('blog')->with('message', 'Post creado correctamente'); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        $post->load(['categoria', 'autor']);
        $categorias = Categorias::all();

        return Inertia::render('admin/blog/EditarPost', [
            'post' => $post, 
            'categorias' => $categorias,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $data = $request->validate([
            'titulo' => 'nullable|string|max:255',
            'imagen' => 'nullable|image|max:2048',
            'descripcion_corta' => 'nullable|string',
           'slug' => 'nullable|string|max:255|unique:posts,slug,' . $post->id . ',id',
            'contenido' => 'nullable|string',
            'tiempo_de_lectura' => 'nullable|integer',
            'estado' => 'nullable|string',
            'categorias_id' => 'nullable|exists:categorias,id',
        ]);
        
        if ($request->hasFile('imagen')) {
            if($post->imagen) {
                Storage::delete($post->imagen);
            }
            $data['imagen'] = Storage::put('posts', $request->imagen);
            }

        $post->update($data);

        return to_route('blog')->with('message', 'Post actualizado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return to_route('blog')->with('message', 'Post eliminado correctamente');
    }
}
