<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmissionMonthlyBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admission_monthly_bills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('acountant_admissions_id')->constrained()->onDelete('cascade')->references('id')->on('channel_accountant_admissions');
            $table->foreignId('accountant_months_id')->constrained()->onDelete('cascade')->references('id')->on('accountant_months');
            $table->string('payment_status'); // paid <=> pending
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
        Schema::dropIfExists('admission_monthly_bills');
    }
}
