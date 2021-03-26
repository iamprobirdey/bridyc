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
            $table->integer('admission_number');
            $table->string('name');
            $table->string('class');
            $table->string('roll_number')->default('n/a');
            $table->string('phone');
            $table->string('father_name');
            $table->string('category');
            $table->json('options');
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
