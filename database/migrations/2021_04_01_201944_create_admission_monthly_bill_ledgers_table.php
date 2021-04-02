<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmissionMonthlyBillLedgersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admission_monthly_bill_ledgers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('monthly_bill_id')->constrained()->onDelete('cascade')->references('id')->on('admission_monthly_bills');
            $table->foreignId('accountant_ledger_id')->constrained()->onDelete('cascade')->references('id')->on('channel_accountant_ledgers');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admission_monthly_bill_ledgers');
    }
}
