<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Crear usuario administrador
        User::create([
            'name' => 'Admin',
            'last_name' => 'User',
            'email' => 'admin@example.com',
            'password' => Hash::make('@Blanca_0812'), // Cambia 'password' por una contraseña segura
            'is_verified' => 'verificado', // Marcar como verificado
            'verification_id' => Str::uuid(),
        ])->assignRole('Admin');

        User::create([
            'name' => 'Editor',
            'last_name' => 'User',
            'email' => 'editor@example.com',
            'password' => Hash::make('@Blanca_0812'), // Cambia 'password' por una contraseña segura
            'is_verified' => 'verificado', // Marcar como verificado
            'verification_id' => Str::uuid(),
        ])->assignRole('Editor');

    }
}
