<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rol1 = Role::create(['name' => 'Admin']);
        $rol2 = Role::create(['name' => 'Editor']);

        Permission::create(['name' => 'dashboard'])->syncRoles([$rol1, $rol2]);

        Permission::create(['name' => 'usuarios'])->syncRoles([$rol1, $rol2]);
        Permission::create(['name' => 'usuarios.destroy'])->syncRoles([$rol1, $rol2]);

        Permission::create(['name' => 'categoria'])->syncRoles([$rol1, $rol2]);
        Permission::create(['name' => 'categoria.create'])->syncRoles([$rol1, $rol2]);
        Permission::create(['name' => 'categoria.destroy'])->syncRoles([$rol1, $rol2]);


    }
}
