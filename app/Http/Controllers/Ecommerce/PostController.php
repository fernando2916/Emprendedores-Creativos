<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Post::with(['categoria', 'autor'])->latest()->paginate(10);
        return Inertia::render('ecommerce/blog/index', compact('data'));
    }

    
    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $post = Post::where('slug', $slug)
            ->with(['categoria', 'autor'])
            ->firstOrFail();
        return Inertia::render('ecommerce/blog/PostId', [
            'post' => $post,
        ]);
    }

}
