<?php

use App\AccountantClass;
use App\AccountantMonth;
use Illuminate\Database\Seeder;

class AccountantClassAndMonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            AccountantClass::create([
                'name' => 'Class ' . $i,
                'code' => 'cls_' . $i
            ]);
        }

        for ($i = 0; $i <= 9; $i++) {
            $months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
            AccountantMonth::create([
                'name' => $months[$i],
                'code' => strtolower($months[$i])
            ]);
        }
    }
}
