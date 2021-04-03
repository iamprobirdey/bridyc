<?php

use App\Country;
use App\District;
use App\Language;
use App\Standard;
use App\State;
use Illuminate\Database\Seeder;

use App\User;
use App\Village;
use Carbon\Carbon;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Str;

class PermissionAndUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role1 = Role::create(['name' => 'admin']);
        $role2 = Role::create(['name' => 'institute']);
        $role3 = Role::create(['name' => 'teacher']);
        $role4 = Role::create(['name' => 'student']);
        $permission1 = Permission::create(['name' => 'admin']);
        $permission2 = Permission::create(['name' => 'institute']);
        $permission3 = Permission::create(['name' => 'teacher']);
        $permission4 = Permission::create(['name' => 'student']);

        $role1->givePermissionTo($permission1);
        $role2->givePermissionTo($permission2);
        $role3->givePermissionTo($permission3);
        $role4->givePermissionTo($permission4);


        $user1 = User::create([
            'name' => Str::random(10),
            'email' => 'deyprobir73@gmail.com',
            'password' => '$2y$10$MLQ1DkGHDZ0fZ1TR/k4KVeD2B.1nawZDw4Qsz7AMuAsoXrq3ddNeO',
            'username' => 'admin',
            'user_type' => 'admin',

        ]);

        // $user2 = User::create([
        //     'name' => Str::random(10),
        //     'email' => 'borahsurajit17@gmail.com',
        //     'password' => '$2y$10$/JFLmAPpSFs4QXSSyYnDb.q8mbQacaLIz4sKAr1qtlGmeXgjeASqC',
        //     'username' => 'borahsurajit17',
        //     'user_type' => 'admin',

        // ]);

        // $user3 = User::create([
        //     'name' => Str::random(10),
        //     'email' => 'terang.shatkiri8@gmail.com',
        //     'password' => '$2y$10$/JFLmAPpSFs4QXSSyYnDb.q8mbQacaLIz4sKAr1qtlGmeXgjeASqC',
        //     'username' => 'terang',
        //     'user_type' => 'admin',

        // ]);
        // $user4 = User::create([
        //     'name' => Str::random(10),
        //     'email' => 'medhipranjal1993@gmail.com',
        //     'password' => '$2y$10$/JFLmAPpSFs4QXSSyYnDb.q8mbQacaLIz4sKAr1qtlGmeXgjeASqC',
        //     'username' => 'medhipranjal1993',
        //     'user_type' => 'admin',

        // ]);

        $user1->update(['email_verified_at' => Carbon::now()]);
        // $user2->update(['email_verified_at' => Carbon::now()]);
        // $user3->update(['email_verified_at' => Carbon::now()]);
        // $user4->update(['email_verified_at' => Carbon::now()]);

        $user1->assignRole('admin');
        // $user2->assignRole('admin');
        // $user3->assignRole('admin');
        // $user4->assignRole('admin');
    }
}
