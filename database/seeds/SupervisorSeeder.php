<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Str;

class SupervisorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $role1 = Role::create(['name' => 'supervisor']);
        $permission1 = Permission::create(['name' => 'supervisor']);
        $role1->givePermissionTo($permission1);

        $user1 = User::create([
            'name' => Str::random(10),
            'email' => 'supervisor@gmail.com',
            'password' => '$2y$10$MLQ1DkGHDZ0fZ1TR/k4KVeD2B.1nawZDw4Qsz7AMuAsoXrq3ddNeO',
            'username' => 'supervisor',
            'user_type' => 'supervisor',
        ]);


        $user1->update(['email_verified_at' => Carbon::now()]);

        $user1->assignRole('supervisor');
    }
}
