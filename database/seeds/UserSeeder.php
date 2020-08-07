<?php

use App\Admin;
use Illuminate\Database\Seeder;
use App\User;
use App\Verification;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        // $user  = User::create([
        //     'name' => Str::random(10),
        //     'email' => 'deyprobir73@gmail.com',
        //     'username' => Str::random(10),
        //     'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
        //     'user_type' => 'institute'
        // ]);


        // Verification::create([
        //     'user_id' => 1
        // ]);

        // Admin::create([
        //     'name' => Str::random(10),
        //     'email' => 'deyprobir71@gmail.com',
        //     'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
        // ]);

        //$user->givePermissionTo($role3);
        // $user->givePermissionTo($role2);
        // $user->assignRole($role1);

    }
}
