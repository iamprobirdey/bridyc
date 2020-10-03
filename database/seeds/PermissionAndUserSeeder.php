<?php

use App\Country;
use App\District;
use App\Language;
use App\Standard;
use App\State;
use Illuminate\Database\Seeder;

use App\User;
use App\Village;
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
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'probir1991',
            'user_type' => 'admin',

        ]);
        $user2 = User::create([
            'name' => Str::random(10),
            'email' => 'borahsurajit17@gmail.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'borahsurajit17',
            'user_type' => 'admin',

        ]);

        $user3 = User::create([
            'name' => Str::random(10),
            'email' => 'terang.shatkiri8@gmail.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'terang',
            'user_type' => 'admin',

        ]);
        $user4 = User::create([
            'name' => Str::random(10),
            'email' => 'medhipranjal1993@gmail.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'medhipranjal1993',
            'user_type' => 'admin',

        ]);
        $user5 = User::create([
            'name' => Str::random(10),
            'email' => 'pisaxsd@mailinator.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'pisaxsd',
            'user_type' => 'institute',

        ]);
        $user6 = User::create([
            'name' => Str::random(10),
            'email' => 'pisax@mailinator.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'pisax',
            'user_type' => 'student',

        ]);
        $user7 = User::create([
            'name' => Str::random(10),
            'email' => 'pisasdsx@mailinator.com',
            'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
            'username' => 'pisasdsx',
            'user_type' => 'teacher',

        ]);

        $user1->assignRole('admin');
        $user2->assignRole('admin');
        $user3->assignRole('admin');
        $user4->assignRole('admin');
        $user5->assignRole('institute');
        $user6->assignRole('student');
        $user7->assignRole('teacher');

        Country::create([
            'name' => 'India'
        ]);

        State::create([
            'country_id' => 1,
            'name' => 'Assam',
            'code' => 'as'
        ]);

        District::create([
            'state_id' => 1,
            'name' => 'Karbi Anglong',
            'code' => 'ka'
        ]);

        Village::create([
            'district_id' => 1,
            'name' => 'baihtalangso',
            'code' => 'blo'
        ]);

        Language::create([
            'name' => 'Assamese',
            'code' => 'ass'
        ]);

        Standard::create([
            'standard_name' => 'Class 1'
        ]);
    }
}
