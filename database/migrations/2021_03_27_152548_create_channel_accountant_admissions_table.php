<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelAccountantAdmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channel_accountant_admissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('channel_id')->constrained()->onDelete('cascade');
            $table->bigInteger('admission_number');
            $table->foreignId('admission_ledger_id')->constrained()->onDelete('cascade')->references('id')->on('channel_accountant_ledgers');
            $table->string('name');
            $table->string('roll_number');
            $table->string('phone');
            $table->string('father_name');
            $table->string('category');
            $table->integer('total_balance');
            $table->integer('balance_taken');
            $table->integer('old_balance');
            $table->string('payment_mode'); //online <=> offline
            $table->json('options')->nullable();
            $table->timestamps();
            //address_line_1,address_line_2,caste,city,section,date_of_birth,gender,
            //father_ocupation,date_of_birth,
            //Officail Details
            //name_of_school, year,state,marks,university,
            //admission_form_number,adhar_card
            //FILES
            //transfer_certificate,caste_certificate,report_card,dob_certificate
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('channel_accountant_admissions');
    }
}
